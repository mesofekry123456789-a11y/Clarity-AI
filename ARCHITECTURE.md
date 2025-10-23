# DocuMind Architecture

This document explains the technical architecture and data flow of DocuMind.

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                          │
│  ┌────────────────┐              ┌─────────────────────┐   │
│  │  Landing Page  │─────────────▶│  Chat Interface     │   │
│  │  (Upload UI)   │              │  (Q&A UI)           │   │
│  └────────────────┘              └─────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                    │                          │
                    │ HTTP POST                │ HTTP POST
                    │ /api/upload              │ /api/chat
                    ▼                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Server (Vercel)                   │
│  ┌──────────────────────┐      ┌──────────────────────┐    │
│  │   Upload Endpoint    │      │    Chat Endpoint     │    │
│  │  /api/upload/route   │      │  /api/chat/route     │    │
│  └──────────────────────┘      └──────────────────────┘    │
│           │                              │                   │
│           ▼                              ▼                   │
│  ┌──────────────────────┐      ┌──────────────────────┐    │
│  │ Document Processor   │      │  Vector Store        │    │
│  │ - PDF Parser         │      │  - Similarity Search │    │
│  │ - Text Splitter      │      │  - Retrieve Context  │    │
│  └──────────────────────┘      └──────────────────────┘    │
│           │                              │                   │
│           ▼                              │                   │
│  ┌──────────────────────┐               │                   │
│  │   Vector Store       │◀──────────────┘                   │
│  │  (In-Memory)         │                                    │
│  │  - Store Embeddings  │                                    │
│  └──────────────────────┘                                    │
└─────────────────────────────────────────────────────────────┘
                    │                          │
                    │ API Call                 │ API Call
                    ▼                          ▼
┌─────────────────────────────────────────────────────────────┐
│                  Google AI Services                          │
│  ┌──────────────────────┐      ┌──────────────────────┐    │
│  │  Embeddings API      │      │   Gemini 1.5 Flash   │    │
│  │  (embedding-001)     │      │   (LLM)              │    │
│  └──────────────────────┘      └──────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Document Upload Flow

```
User Selects File
      │
      ▼
Frontend Validation
(File type, size)
      │
      ▼
POST /api/upload
      │
      ▼
Server Validation
      │
      ▼
Extract Text
(PDF or TXT)
      │
      ▼
Split into Chunks
(RecursiveCharacterTextSplitter)
      │
      ▼
Generate Embeddings
(Google Embeddings API)
      │
      ▼
Store in Vector DB
(MemoryVectorStore)
      │
      ▼
Return Document ID
      │
      ▼
Show Chat Interface
```

### 2. Question Answering Flow

```
User Asks Question
      │
      ▼
POST /api/chat
{documentId, question}
      │
      ▼
Generate Question Embedding
      │
      ▼
Similarity Search
(Find top 4 relevant chunks)
      │
      ▼
Build Context
(Combine relevant chunks)
      │
      ▼
Create Prompt
(Context + Question + Instructions)
      │
      ▼
Call Gemini API
      │
      ▼
Generate Answer
      │
      ▼
Return Answer + Sources
      │
      ▼
Display in Chat UI
```

## Component Architecture

### Frontend Components

```
app/
├── page.tsx (Landing Page)
│   ├── File Upload UI
│   ├── Loading State
│   └── Error Display
│
components/
└── ChatInterface.tsx
    ├── Header (Document name, Reset button)
    ├── Message List
    │   ├── User Messages
    │   └── Assistant Messages
    │       └── Source Citations
    ├── Input Form
    └── Source Modal
```

### Backend Services

```
lib/
├── documentProcessor.ts
│   ├── extractTextFromPDF()
│   ├── extractTextFromTXT()
│   └── splitTextIntoChunks()
│
└── vectorStore.ts
    ├── createVectorStore()
    ├── getVectorStore()
    ├── deleteVectorStore()
    └── searchSimilarDocuments()
```

### API Routes

```
app/api/
├── upload/route.ts
│   ├── Validate file
│   ├── Extract text
│   ├── Create chunks
│   ├── Generate embeddings
│   └── Store in vector DB
│
└── chat/route.ts
    ├── Validate request
    ├── Search similar docs
    ├── Build context
    ├── Call LLM
    └── Return answer + sources
```

## Technology Stack Details

### Frontend Layer
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useRef, useEffect)

### Backend Layer
- **Runtime**: Node.js 18+
- **Framework**: Next.js API Routes
- **File Processing**: pdf-parse, Buffer API
- **Text Processing**: LangChain RecursiveCharacterTextSplitter

### AI/ML Layer
- **LLM**: Google Gemini 1.5 Flash
- **Embeddings**: Google Generative AI (embedding-001)
- **Vector Store**: LangChain MemoryVectorStore
- **Orchestration**: LangChain.js

### Deployment Layer
- **Hosting**: Vercel (Serverless)
- **CDN**: Vercel Edge Network
- **Environment**: Serverless Functions

## Data Models

### Document Chunk
```typescript
{
  pageContent: string;      // The text content
  metadata: {
    source: string;         // Original filename
    chunkIndex: number;     // Position in document
    totalChunks: number;    // Total number of chunks
    page?: number;          // Page number (if available)
  }
}
```

### Message
```typescript
{
  role: "user" | "assistant";
  content: string;
  sources?: Array<{
    pageContent: string;
    metadata: {
      source: string;
      page?: number;
    }
  }>;
}
```

### API Request/Response

**Upload Request**:
```typescript
FormData {
  file: File  // PDF or TXT file
}
```

**Upload Response**:
```typescript
{
  documentId: string;
  message: string;
  chunks: number;
}
```

**Chat Request**:
```typescript
{
  documentId: string;
  question: string;
}
```

**Chat Response**:
```typescript
{
  answer: string;
  sources: Array<{
    pageContent: string;
    metadata: object;
  }>;
}
```

## Security Architecture

### Input Validation
- File type validation (client + server)
- File size limits (10MB)
- Request body validation
- Environment variable validation

### Data Privacy
- No persistent storage
- In-memory processing only
- Session-based vector stores
- No user tracking

### API Security
- Environment variables for secrets
- Server-side API calls only
- Rate limiting (via Vercel)
- CORS protection

## Performance Optimizations

### Frontend
- React component memoization
- Lazy loading of components
- Optimized re-renders
- Efficient state updates

### Backend
- Streaming responses (future)
- Chunking for large documents
- Efficient similarity search
- Minimal API calls

### AI/ML
- Optimal chunk size (1000 chars)
- Chunk overlap (200 chars)
- Top-k retrieval (k=4)
- Efficient embeddings

## Scalability Considerations

### Current Limitations
- Single instance (in-memory store)
- No horizontal scaling
- Limited concurrent users
- Session-based storage

### Future Improvements
1. **Persistent Vector Store**
   - Pinecone, Weaviate, or Qdrant
   - Multi-user support
   - Document persistence

2. **Caching Layer**
   - Redis for frequent queries
   - Embedding cache
   - Response cache

3. **Queue System**
   - Background processing
   - Async document processing
   - Rate limiting

4. **Database**
   - PostgreSQL for metadata
   - User accounts
   - Conversation history

## Error Handling

### Frontend Errors
- File validation errors
- Upload failures
- Network errors
- API errors

### Backend Errors
- File processing errors
- API key errors
- LLM errors
- Vector store errors

### Recovery Strategies
- Graceful degradation
- User-friendly messages
- Retry mechanisms
- Fallback responses

## Monitoring & Logging

### Current
- Console logs (development)
- Error messages (user-facing)

### Recommended (Production)
- Application monitoring (Sentry)
- API usage tracking
- Performance metrics
- Error tracking

## Development Workflow

```
Local Development
      │
      ▼
Git Commit
      │
      ▼
Push to GitHub
      │
      ▼
Vercel Auto-Deploy
      │
      ▼
Preview Deployment
      │
      ▼
Testing
      │
      ▼
Merge to Main
      │
      ▼
Production Deployment
```

## API Rate Limits

### Google AI (Free Tier)
- **Embeddings**: 60 requests/minute
- **Gemini**: 60 requests/minute
- **Daily Limit**: 1,500 requests/day

### Handling Limits
- Batch embeddings when possible
- Cache frequent queries
- Implement retry logic
- Monitor usage

## Future Architecture Enhancements

1. **Microservices**
   - Separate document processing service
   - Dedicated vector search service
   - Authentication service

2. **Event-Driven**
   - Message queue (RabbitMQ, Redis)
   - Async processing
   - Webhooks

3. **Multi-Tenancy**
   - User isolation
   - Resource quotas
   - Billing integration

4. **Advanced Features**
   - Real-time collaboration
   - Document versioning
   - Advanced analytics

---

This architecture is designed for the MVP but can scale to support thousands of users with the recommended enhancements.
