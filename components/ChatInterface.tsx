"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, FileText, ArrowLeft, BookOpen } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: Array<{
    pageContent: string;
    metadata: {
      source: string;
      page?: number;
    };
  }>;
}

interface ChatInterfaceProps {
  documentId: string;
  fileName: string;
  onReset: () => void;
}

export default function ChatInterface({
  documentId,
  fileName,
  onReset,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSource, setSelectedSource] = useState<{
    content: string;
    index: number;
  } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documentId,
          question: input,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      const assistantMessage: Message = {
        role: "assistant",
        content: data.answer,
        sources: data.sources,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      let errorMsg = "Sorry, I encountered an error processing your question. Please try again.";
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMsg = "Request timed out. Please try again with a shorter question.";
        } else if (error.message) {
          errorMsg = `Error: ${error.message}`;
        }
      }
      
      const errorMessage: Message = {
        role: "assistant",
        content: errorMsg,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onReset}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                title="Upload new document"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800 dark:text-gray-100">
                    {fileName}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Ready to answer your questions
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DocuMind
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="space-y-6 mb-32">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Ask me anything about your document
                </h3>
                <div className="grid gap-3 text-left">
                  <button
                    onClick={() =>
                      setInput("What are the main findings of this document?")
                    }
                    className="p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-200 transition-colors text-left"
                  >
                    💡 What are the main findings of this document?
                  </button>
                  <button
                    onClick={() => setInput("Can you summarize this document?")}
                    className="p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-200 transition-colors text-left"
                  >
                    📝 Can you summarize this document?
                  </button>
                  <button
                    onClick={() =>
                      setInput("What are the key conclusions?")
                    }
                    className="p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-200 transition-colors text-left"
                  >
                    🎯 What are the key conclusions?
                  </button>
                </div>
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-3xl ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                } rounded-2xl shadow-lg p-6`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
                {message.sources && message.sources.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-semibold mb-2 text-gray-600 dark:text-gray-400">
                      Sources:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {message.sources.map((source, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setSelectedSource({
                              content: source.pageContent,
                              index: idx + 1,
                            })
                          }
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          <span className="font-bold">[{idx + 1}]</span>
                          {source.metadata.page && (
                            <span className="text-xs">
                              Page {source.metadata.page}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Thinking...
                  </span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about your document..."
              className="flex-1 px-6 py-4 bg-gray-100 dark:bg-gray-700 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-xl transition-colors disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>
        </div>
      </div>

      {/* Source Modal */}
      {selectedSource && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedSource(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Source [{selectedSource.index}]
              </h3>
              <button
                onClick={() => setSelectedSource(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {selectedSource.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
