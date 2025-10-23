# 🚀 Get Started with DocuMind

Welcome! This guide will get you up and running in **5 minutes**.

## ⚡ Quick Start (TL;DR)

```bash
# 1. Install dependencies
npm install

# 2. Get API key from https://makersuite.google.com/app/apikey

# 3. Create .env.local file
echo "GOOGLE_API_KEY=your_api_key_here" > .env.local

# 4. Run the app
npm run dev

# 5. Open http://localhost:3000
```

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js 18+** installed ([Download](https://nodejs.org/))
- ✅ **npm** (comes with Node.js)
- ✅ **Google Account** (for free API key)
- ✅ **Text Editor** (VS Code recommended)
- ✅ **Modern Browser** (Chrome, Firefox, Edge, Safari)

### Check Your Setup

```bash
# Check Node version (should be 18.x or higher)
node --version

# Check npm version
npm --version
```

## 📥 Step 1: Get the Code

You already have the code! You're in the right directory:
```
c:/Users/Al forsan/OneDrive/سطح المكتب/Clarity AI
```

## 📦 Step 2: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

**What's happening?**
- Downloading all required packages
- Installing Next.js, React, LangChain, etc.
- Setting up development tools

**Time**: 2-3 minutes

**Expected output**: 
```
added 500+ packages in 2m
```

## 🔑 Step 3: Get Your Google AI API Key

1. **Visit**: https://makersuite.google.com/app/apikey

2. **Sign in** with your Google account

3. **Click** "Create API Key"

4. **Copy** the key (looks like: `AIzaSyD...`)

**Important**: 
- ✅ It's completely FREE
- ✅ No credit card required
- ✅ Generous free tier (1,500 requests/day)

## ⚙️ Step 4: Configure Environment

Create a file named `.env.local` in the project root:

### Option A: Using Command Line

**Windows (PowerShell)**:
```powershell
echo "GOOGLE_API_KEY=your_api_key_here" > .env.local
```

**Mac/Linux**:
```bash
echo "GOOGLE_API_KEY=your_api_key_here" > .env.local
```

### Option B: Manual Creation

1. Create new file: `.env.local`
2. Add this line:
   ```
   GOOGLE_API_KEY=AIzaSyD...your_actual_key_here
   ```
3. Save the file

**⚠️ Important**:
- Replace `your_api_key_here` with your actual key
- No quotes around the key
- No spaces around the `=`
- File must be named exactly `.env.local`

## 🎯 Step 5: Run the Application

Start the development server:

```bash
npm run dev
```

**Expected output**:
```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

## 🌐 Step 6: Open in Browser

1. Open your browser
2. Navigate to: **http://localhost:3000**
3. You should see the DocuMind landing page! 🎉

## 🧪 Step 7: Test It Out

### Upload a Document

1. **Click** the upload area
2. **Select** a PDF or TXT file (try a research paper or article)
3. **Wait** for "Analyzing document..." (10-30 seconds)
4. **Chat interface** appears when ready

### Ask Questions

Try these example questions:

1. **"What is this document about?"**
   - Gets overall summary

2. **"What are the main findings?"**
   - Extracts key points

3. **"Can you summarize this in 3 bullet points?"**
   - Concise summary

4. **"What methodology was used?"**
   - Specific information

### Check Source Citations

- Look for numbered badges like **[1]**, **[2]**
- Click on them to see the original text
- Verify the AI's answers are grounded in the document

## ✅ Verification Checklist

Make sure everything works:

- [ ] Landing page loads correctly
- [ ] Can upload a PDF file
- [ ] Document processes successfully
- [ ] Chat interface appears
- [ ] Can ask questions
- [ ] Receive relevant answers
- [ ] Source citations appear
- [ ] Can click and view sources
- [ ] Can reset and upload new document

## 🎨 What You Should See

### Landing Page
- Beautiful gradient background
- "DocuMind" title with icon
- Upload area with drag-and-drop
- Three feature cards at bottom

### Chat Interface
- Document name in header
- Suggested starter questions
- Clean message bubbles
- Source citation badges
- Input box at bottom

## 🐛 Common Issues

### "API key not configured"
- Check `.env.local` exists
- Verify API key is correct
- Restart the server (`Ctrl+C` then `npm run dev`)

### "Port 3000 already in use"
- Use different port: `npm run dev -- -p 3001`
- Or kill the process using port 3000

### Upload fails
- Check file is PDF or TXT
- Ensure file is less than 10MB
- Try a different file

### No response to questions
- Check browser console (F12)
- Verify internet connection
- Check API quota at https://makersuite.google.com

**More help**: See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

## 📚 Next Steps

Now that you're up and running:

### 1. Explore the Code

```
app/
├── page.tsx              # Landing page
├── api/upload/route.ts   # Upload endpoint
└── api/chat/route.ts     # Chat endpoint

components/
└── ChatInterface.tsx     # Chat UI

lib/
├── documentProcessor.ts  # PDF/TXT processing
└── vectorStore.ts        # Vector search
```

### 2. Customize the UI

- Edit colors in `tailwind.config.ts`
- Modify text in `app/page.tsx`
- Update styles in `app/globals.css`

### 3. Test with Different Documents

- Research papers (PDF)
- Books (PDF)
- Articles (TXT)
- Reports (PDF)
- Notes (TXT)

### 4. Deploy to Production

When ready to share with the world:

1. Push code to GitHub
2. Deploy to Vercel (free)
3. Share your URL!

See [DEPLOYMENT.md](DEPLOYMENT.md) for details.

## 📖 Documentation

- **[README.md](README.md)**: Full project documentation
- **[QUICKSTART.md](QUICKSTART.md)**: 5-minute setup guide
- **[ARCHITECTURE.md](ARCHITECTURE.md)**: Technical architecture
- **[DEPLOYMENT.md](DEPLOYMENT.md)**: Deployment guide
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)**: Common issues
- **[CONTRIBUTING.md](CONTRIBUTING.md)**: How to contribute
- **[COMMANDS.md](COMMANDS.md)**: Useful commands

## 💡 Tips for Best Results

### Document Quality
- Use text-based PDFs (not scanned images)
- Clear, well-formatted documents work best
- Longer documents provide more context

### Question Quality
- Be specific and clear
- Include keywords from the document
- Ask one thing at a time
- Rephrase if needed

### Performance
- First upload takes longer (initializing)
- Smaller files process faster
- Good internet connection helps

## 🎯 Use Cases

DocuMind is perfect for:

- 📚 **Students**: Analyze research papers and textbooks
- 🔬 **Researchers**: Extract insights from studies
- ⚖️ **Lawyers**: Review legal documents
- 💼 **Professionals**: Summarize reports
- 📖 **Readers**: Understand complex texts
- ✍️ **Writers**: Research and reference

## 🔒 Privacy & Security

- ✅ Documents processed in-memory only
- ✅ No permanent storage
- ✅ No user tracking
- ✅ Your data stays private
- ✅ Open source and transparent

## 🤝 Get Help

### Documentation
- Check the guides in this folder
- Read the README
- Review troubleshooting guide

### Community
- Open an issue on GitHub
- Ask in discussions
- Check existing issues

### Contact
- Create a GitHub issue
- Include error messages
- Describe what you tried

## 🎉 You're All Set!

Congratulations! You now have:

- ✅ DocuMind running locally
- ✅ Understanding of how it works
- ✅ Ability to chat with documents
- ✅ Knowledge to customize and deploy

## 🚀 What's Next?

1. **Try it out**: Upload your documents and explore
2. **Customize**: Make it your own
3. **Deploy**: Share with the world
4. **Contribute**: Help make it better

---

**Happy Document Chatting!** 🎊

If you found this helpful, consider:
- ⭐ Starring the project on GitHub
- 📢 Sharing with others
- 🤝 Contributing improvements
- 💬 Providing feedback

**Questions?** Check the documentation or open an issue!
