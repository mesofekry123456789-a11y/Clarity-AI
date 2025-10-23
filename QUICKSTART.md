# Quick Start Guide

Get DocuMind running in 5 minutes!

## Step 1: Get Your Google AI API Key

1. Go to https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key (keep it safe!)

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Configure Environment

Create a file named `.env.local` in the project root:

```env
GOOGLE_API_KEY=paste_your_api_key_here
```

## Step 4: Run the App

```bash
npm run dev
```

## Step 5: Test It Out

1. Open http://localhost:3000 in your browser
2. Upload a PDF or TXT file
3. Wait for processing (10-30 seconds)
4. Ask questions about your document!

## Example Questions to Try

- "What are the main findings of this document?"
- "Can you summarize this in 3 bullet points?"
- "What methodology was used?"
- "What are the key conclusions?"

## Troubleshooting

### "API key not configured" error
- Make sure your `.env.local` file exists
- Check that the API key is correct
- Restart the development server

### Upload fails
- Check file size (must be < 10MB)
- Ensure file is PDF or TXT format
- Try a different file

### Slow processing
- First upload takes longer (initializing AI models)
- Large documents (>5MB) take more time
- Check your internet connection

## Next Steps

- Read the full [README.md](README.md) for more details
- Deploy to Vercel for free hosting
- Customize the UI to match your brand

## Need Help?

Open an issue on GitHub or check the documentation!
