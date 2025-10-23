import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { Document } from "langchain/document";

// In-memory storage for vector stores (per session)
const vectorStores = new Map<string, MemoryVectorStore>();

export async function createVectorStore(
  documents: Document[],
  documentId: string
): Promise<void> {
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY is not set");
  }

  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    modelName: "embedding-001",
  });

  const vectorStore = await MemoryVectorStore.fromDocuments(
    documents,
    embeddings
  );

  vectorStores.set(documentId, vectorStore);
}

export function getVectorStore(documentId: string): MemoryVectorStore | undefined {
  return vectorStores.get(documentId);
}

export function deleteVectorStore(documentId: string): void {
  vectorStores.delete(documentId);
}

export async function searchSimilarDocuments(
  documentId: string,
  query: string,
  k: number = 4
): Promise<Document[]> {
  const vectorStore = getVectorStore(documentId);
  if (!vectorStore) {
    throw new Error("Vector store not found for this document");
  }

  const results = await vectorStore.similaritySearch(query, k);
  return results;
}
