import pdf from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function extractTextFromPDF(buffer: Buffer): Promise<string> {
  try {
    const data = await pdf(buffer);
    return data.text;
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    throw new Error("Failed to extract text from PDF");
  }
}

export async function extractTextFromTXT(buffer: Buffer): Promise<string> {
  return buffer.toString("utf-8");
}

export async function splitTextIntoChunks(text: string) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
    separators: ["\n\n", "\n", ". ", " ", ""],
  });

  const chunks = await splitter.createDocuments([text]);
  return chunks;
}
