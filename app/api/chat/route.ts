import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { searchSimilarDocuments } from "@/lib/vectorStore";

export async function POST(request: NextRequest) {
  try {
    const { documentId, question } = await request.json();

    if (!documentId || !question) {
      return NextResponse.json(
        { error: "Missing documentId or question" },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Search for relevant document chunks
    const relevantDocs = await searchSimilarDocuments(documentId, question, 4);

    if (relevantDocs.length === 0) {
      return NextResponse.json({
        answer: "I couldn't find relevant information in the document to answer your question.",
        sources: [],
      });
    }

    // Prepare context from relevant documents
    const context = relevantDocs
      .map((doc, idx) => `[${idx + 1}] ${doc.pageContent}`)
      .join("\n\n");

    // Create prompt for the LLM
    const prompt = `You are a helpful AI assistant that answers questions based solely on the provided document context. 

IMPORTANT RULES:
1. Only use information from the context below to answer the question
2. If the context doesn't contain enough information to answer the question, say so
3. Be concise and accurate
4. When referencing information, mention which source number [1], [2], etc. you're using
5. Do not make up information or use external knowledge

CONTEXT:
${context}

QUESTION: ${question}

ANSWER:`;

    // Call Google Gemini API with timeout
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
      }
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const answer = response.text();

    // Prepare sources for citation
    const sources = relevantDocs.map((doc) => ({
      pageContent: doc.pageContent,
      metadata: doc.metadata,
    }));

    return NextResponse.json({
      answer,
      sources,
    });
  } catch (error) {
    console.error("Error in chat:", error);
    
    // Log detailed error for debugging
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to process question",
      },
      { status: 500 }
    );
  }
}
