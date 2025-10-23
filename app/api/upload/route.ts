import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import {
  extractTextFromPDF,
  extractTextFromTXT,
  splitTextIntoChunks,
} from "@/lib/documentProcessor";
import { createVectorStore } from "@/lib/vectorStore";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ["application/pdf", "text/plain"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only PDF and TXT files are supported." },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Extract text based on file type
    let text: string;
    if (file.type === "application/pdf") {
      text = await extractTextFromPDF(buffer);
    } else {
      text = await extractTextFromTXT(buffer);
    }

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Could not extract text from the document" },
        { status: 400 }
      );
    }

    // Split text into chunks
    const documents = await splitTextIntoChunks(text);

    // Add metadata to documents
    documents.forEach((doc, index) => {
      doc.metadata = {
        source: file.name,
        chunkIndex: index,
        totalChunks: documents.length,
      };
    });

    // Generate unique document ID
    const documentId = randomUUID();

    // Create vector store
    await createVectorStore(documents, documentId);

    return NextResponse.json({
      documentId,
      message: "Document processed successfully",
      chunks: documents.length,
    });
  } catch (error) {
    console.error("Error processing document:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to process document",
      },
      { status: 500 }
    );
  }
}
