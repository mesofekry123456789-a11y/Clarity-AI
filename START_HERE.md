# 👋 Welcome to DocuMind!

**Your free AI Research Assistant is ready to build!**

## 🎯 What is DocuMind?

DocuMind is a completely free, open-source AI research assistant that lets you:
- 📄 Upload documents (PDF/TXT)
- 💬 Chat with them using AI
- 🔍 Get answers with source citations
- ✨ All powered by Google's free Gemini API

Think of it as a **free alternative to Google NotebookLM**!

## ⚡ Quick Start (3 Steps)

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Get Free API Key
Visit: https://makersuite.google.com/app/apikey
- Sign in with Google
- Click "Create API Key"
- Copy the key

### 3️⃣ Configure & Run
```bash
# Create environment file
echo "GOOGLE_API_KEY=your_key_here" > .env.local

# Start the app
npm run dev
```

**Open**: http://localhost:3000

**That's it!** 🎉

## 📚 Documentation Guide

Choose your path:

### 🚀 Just Want to Run It?
→ **[GET_STARTED.md](GET_STARTED.md)** - Complete beginner-friendly guide

### ⚡ Need Quick Reference?
→ **[QUICKSTART.md](QUICKSTART.md)** - 5-minute setup

### 🔧 Having Issues?
→ **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Common problems & solutions

### 📖 Want Full Details?
→ **[README.md](README.md)** - Complete project documentation

### 🏗️ Understanding the Code?
→ **[ARCHITECTURE.md](ARCHITECTURE.md)** - Technical architecture

### 🚢 Ready to Deploy?
→ **[DEPLOYMENT.md](DEPLOYMENT.md)** - Production deployment guide

### 💻 Need Commands?
→ **[COMMANDS.md](COMMANDS.md)** - Useful terminal commands

### 🤝 Want to Contribute?
→ **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines

### 📋 Project Overview?
→ **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete feature list

### ✅ Setup Checklist?
→ **[SETUP_CHECKLIST.md](SETUP_CHECKLIST.md)** - Step-by-step verification

## 🎨 What You Get

### ✨ Features Included

- ✅ **Beautiful Landing Page** - Modern UI with gradient design
- ✅ **File Upload** - Drag & drop PDF/TXT files
- ✅ **AI Chat Interface** - Clean, responsive chat UI
- ✅ **Smart Q&A** - Powered by Google Gemini
- ✅ **Source Citations** - Every answer backed by sources
- ✅ **Dark Mode** - Automatic theme switching
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Loading States** - Clear feedback during processing

### 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Gemini 1.5 Flash
- **Embeddings**: Google Generative AI
- **Vector Store**: LangChain MemoryVectorStore
- **PDF Parser**: pdf-parse
- **Icons**: Lucide React

## 📁 Project Structure

```
Clarity AI/
│
├── 📄 Documentation
│   ├── START_HERE.md          ← You are here!
│   ├── GET_STARTED.md         ← Best place to start
│   ├── README.md              ← Main documentation
│   ├── QUICKSTART.md          ← 5-minute guide
│   ├── ARCHITECTURE.md        ← Technical details
│   ├── DEPLOYMENT.md          ← Deploy to production
│   ├── TROUBLESHOOTING.md     ← Fix common issues
│   ├── CONTRIBUTING.md        ← Contribute code
│   ├── COMMANDS.md            ← Useful commands
│   ├── PROJECT_SUMMARY.md     ← Feature overview
│   └── SETUP_CHECKLIST.md     ← Verification steps
│
├── 🎨 Application Code
│   ├── app/
│   │   ├── page.tsx           ← Landing page
│   │   ├── layout.tsx         ← Root layout
│   │   ├── globals.css        ← Global styles
│   │   └── api/
│   │       ├── upload/        ← Document upload
│   │       └── chat/          ← Q&A endpoint
│   │
│   ├── components/
│   │   └── ChatInterface.tsx  ← Chat UI
│   │
│   └── lib/
│       ├── documentProcessor.ts  ← PDF/TXT parsing
│       └── vectorStore.ts        ← Vector search
│
├── ⚙️ Configuration
│   ├── package.json           ← Dependencies
│   ├── tsconfig.json          ← TypeScript config
│   ├── tailwind.config.ts     ← Tailwind config
│   ├── next.config.mjs        ← Next.js config
│   ├── .env.example           ← Environment template
│   └── vercel.json            ← Deployment config
│
└── 📝 Other Files
    ├── .gitignore             ← Git ignore rules
    ├── .eslintrc.json         ← ESLint config
    └── public/                ← Static files
```

## 🎯 Recommended Path

### For Beginners:
1. Read **[GET_STARTED.md](GET_STARTED.md)**
2. Follow the setup steps
3. Test with a sample document
4. Check **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** if needed

### For Developers:
1. Skim **[README.md](README.md)**
2. Review **[ARCHITECTURE.md](ARCHITECTURE.md)**
3. Run `npm install` and `npm run dev`
4. Explore the code structure

### For Deployers:
1. Complete local setup first
2. Read **[DEPLOYMENT.md](DEPLOYMENT.md)**
3. Push to GitHub
4. Deploy to Vercel

## 💡 Key Information

### Requirements
- Node.js 18 or higher
- Google AI API key (free)
- Modern web browser

### Free Tier Limits
- **Google AI**: 1,500 requests/day
- **Vercel**: Unlimited hobby projects
- **No credit card needed!**

### File Support
- PDF files (text-based, not scanned)
- TXT files
- Maximum 10MB per file

### Privacy
- Documents processed in-memory only
- No permanent storage
- No user tracking
- Completely private

## 🚀 Next Steps

1. **Choose your guide** from the list above
2. **Follow the setup** instructions
3. **Test the application** with sample documents
4. **Customize** to your needs (optional)
5. **Deploy** to share with others (optional)

## 🆘 Need Help?

### Quick Fixes
- Restart the server: `Ctrl+C` then `npm run dev`
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`

### Documentation
- Check the relevant guide above
- Search for your issue in **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)**

### Community
- Open an issue on GitHub
- Check existing issues and discussions

## ✅ Pre-Flight Checklist

Before you start, verify:

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm available (`npm --version`)
- [ ] Text editor ready (VS Code recommended)
- [ ] Google account (for API key)
- [ ] Internet connection

## 🎉 Ready to Begin?

**Start here**: [GET_STARTED.md](GET_STARTED.md)

This comprehensive guide will walk you through:
- Installing dependencies
- Getting your API key
- Configuring the environment
- Running the application
- Testing all features
- Troubleshooting issues

## 📊 What to Expect

### Setup Time
- **Installation**: 2-3 minutes
- **Configuration**: 1-2 minutes
- **First Run**: 30 seconds
- **Total**: ~5 minutes

### First Upload
- **Processing**: 10-30 seconds
- **Depends on**: File size and internet speed

### Chat Response
- **Typical**: 5-15 seconds
- **Depends on**: Question complexity

## 🌟 Features Roadmap

### ✅ MVP (Current)
- Single file upload
- PDF & TXT support
- AI-powered Q&A
- Source citations
- Beautiful UI

### 🔜 Coming Soon
- Multi-file support
- Conversation history
- More file formats
- Export conversations
- User accounts

### 💭 Future Ideas
- Mobile app
- Browser extension
- Collaborative features
- Advanced search
- Custom AI models

## 🤝 Contributing

Want to help improve DocuMind?

- 🐛 Report bugs
- 💡 Suggest features
- 📝 Improve documentation
- 💻 Submit code
- ⭐ Star the project

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for details.

## 📄 License

MIT License - Free to use, modify, and distribute!

## 🙏 Acknowledgments

- Inspired by Google NotebookLM
- Built with amazing open-source tools
- Powered by Google Gemini AI

---

## 🎯 Your Next Action

**Click here**: [GET_STARTED.md](GET_STARTED.md)

Or run this command to start immediately:

```bash
npm install && echo "GOOGLE_API_KEY=your_key_here" > .env.local && npm run dev
```

**Questions?** Check the documentation or open an issue!

**Let's build something amazing!** 🚀

---

*Last Updated: October 2025*
*Version: 1.0.0 (MVP)*
