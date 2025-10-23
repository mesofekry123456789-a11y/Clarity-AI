# DocuMind - AI Research Assistant

A completely free and intelligent research assistant that allows you to upload your private documents (research papers, books, reports) and engage in an interactive conversation with them. Get precise answers, summaries, and insights directly supported by sources from within your documents.

## 🌟 Features

- **Simple File Upload**: Support for PDF and TXT files (up to 10MB)
- **Intelligent Q&A**: Ask questions and get accurate answers grounded in your document
- **Source Citations**: Every answer includes references to the specific passages used
- **Beautiful UI**: Modern, responsive interface built with Tailwind CSS
- **100% Free**: Uses Google Gemini's free tier for AI processing
- **Privacy-First**: Documents are processed in-memory, not stored permanently

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Google AI API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd documind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GOOGLE_API_KEY=your_api_key_here
   ```
   
   Get your free API key from: https://makersuite.google.com/app/apikey

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How to Use

1. **Upload a Document**: Click the upload area and select a PDF or TXT file
2. **Wait for Processing**: The system will analyze your document (usually takes 10-30 seconds)
3. **Start Chatting**: Once processed, ask questions about your document
4. **View Sources**: Click on source citations [1], [2], etc. to see the original text

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI/ML**: 
  - Google Gemini API (LLM)
  - LangChain.js (orchestration)
  - Google Generative AI Embeddings
- **Vector Store**: In-memory (MemoryVectorStore)
- **Document Processing**: pdf-parse
- **Icons**: Lucide React

## 📁 Project Structure

```
documind/
├── app/
│   ├── api/
│   │   ├── upload/      # Document upload endpoint
│   │   └── chat/        # Q&A endpoint
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   └── ChatInterface.tsx # Chat UI component
├── lib/
│   ├── documentProcessor.ts # PDF/TXT parsing
│   └── vectorStore.ts       # Vector store management
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add your `GOOGLE_API_KEY` environment variable
5. Deploy!

Vercel will automatically detect Next.js and configure everything for you.

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `GOOGLE_API_KEY`: Your Google AI API key

## 🔒 Privacy & Security

- Documents are processed in-memory and not stored on disk
- Vector stores are session-based and cleared when the server restarts
- No user authentication or tracking
- All processing happens server-side

## 🎯 Roadmap

Future features planned:

- [ ] Multi-file support
- [ ] Conversation history
- [ ] User accounts
- [ ] More file formats (DOCX, etc.)
- [ ] Export conversations
- [ ] Advanced search filters
- [ ] Mobile app

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by Google's NotebookLM
- Built with amazing open-source tools
- Powered by Google Gemini AI

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Made with ❤️ for students, researchers, and knowledge seekers everywhere**
