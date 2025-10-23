# Setup Checklist

Use this checklist to ensure DocuMind is properly set up and running.

## ✅ Pre-Installation

- [ ] Node.js 18 or higher installed
  - Check: `node --version`
  - Download from: https://nodejs.org/

- [ ] npm or yarn package manager available
  - Check: `npm --version`

- [ ] Git installed (optional, for version control)
  - Check: `git --version`

## ✅ Installation

- [ ] Navigate to project directory
  ```bash
  cd "c:/Users/Al forsan/OneDrive/سطح المكتب/Clarity AI"
  ```

- [ ] Install dependencies
  ```bash
  npm install
  ```
  - This may take 2-5 minutes
  - Should complete without errors

- [ ] Verify installation
  - [ ] `node_modules` folder created
  - [ ] No error messages in terminal

## ✅ Configuration

- [ ] Get Google AI API Key
  - [ ] Visit https://makersuite.google.com/app/apikey
  - [ ] Sign in with Google account
  - [ ] Click "Create API Key"
  - [ ] Copy the key

- [ ] Create environment file
  - [ ] Copy `.env.example` to `.env.local`
    ```bash
    cp .env.example .env.local
    ```
  - [ ] Open `.env.local` in text editor
  - [ ] Replace `your_api_key_here` with your actual API key
  - [ ] Save the file

- [ ] Verify environment setup
  - [ ] `.env.local` file exists
  - [ ] Contains valid API key
  - [ ] No extra spaces or quotes around the key

## ✅ First Run

- [ ] Start development server
  ```bash
  npm run dev
  ```

- [ ] Check for errors
  - [ ] No error messages in terminal
  - [ ] See "Ready" message
  - [ ] Port 3000 is available

- [ ] Open in browser
  - [ ] Navigate to http://localhost:3000
  - [ ] Page loads successfully
  - [ ] No console errors (F12 to check)

## ✅ Functionality Test

- [ ] **Landing Page**
  - [ ] Page displays correctly
  - [ ] "DocuMind" title visible
  - [ ] Upload area visible
  - [ ] Feature cards display

- [ ] **File Upload**
  - [ ] Click upload area
  - [ ] File picker opens
  - [ ] Select a test PDF or TXT file
  - [ ] "Analyzing document..." message appears
  - [ ] Processing completes (10-30 seconds)
  - [ ] Chat interface appears

- [ ] **Chat Interface**
  - [ ] Document name displays in header
  - [ ] Suggested questions visible
  - [ ] Input box is functional
  - [ ] Can type a question

- [ ] **Ask a Question**
  - [ ] Type: "What is this document about?"
  - [ ] Click Send or press Enter
  - [ ] "Thinking..." indicator appears
  - [ ] Response appears (5-15 seconds)
  - [ ] Response is relevant to document

- [ ] **Source Citations**
  - [ ] Source badges [1], [2] appear
  - [ ] Click on a source badge
  - [ ] Modal popup shows source text
  - [ ] Can close modal

- [ ] **Reset Function**
  - [ ] Click back arrow in header
  - [ ] Returns to landing page
  - [ ] Can upload new document

## ✅ Error Handling Test

- [ ] **Invalid File Type**
  - [ ] Try uploading a .jpg or .docx file
  - [ ] Error message displays
  - [ ] Upload is rejected

- [ ] **Large File**
  - [ ] Try uploading file > 10MB
  - [ ] Error message displays
  - [ ] Upload is rejected

- [ ] **Invalid API Key**
  - [ ] Temporarily change API key to invalid value
  - [ ] Try uploading document
  - [ ] Error is caught and displayed
  - [ ] Restore correct API key

## ✅ Browser Compatibility

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on Mac)

## ✅ Responsive Design

Test on different screen sizes:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

## ✅ Performance Check

- [ ] Upload processes in reasonable time (< 1 minute)
- [ ] Chat responses arrive in < 30 seconds
- [ ] UI is responsive (no freezing)
- [ ] No memory leaks (check Task Manager)

## ✅ Production Readiness

- [ ] All tests passing
- [ ] No console errors
- [ ] Environment variables secured
- [ ] `.env.local` in `.gitignore`
- [ ] Ready to deploy

## 🚀 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Environment variables added in Vercel
- [ ] Deployment successful
- [ ] Production URL works
- [ ] Test upload on production
- [ ] Test chat on production

## 📝 Common Issues

### Issue: "Cannot find module"
**Solution**: Run `npm install` again

### Issue: "API key not configured"
**Solution**: Check `.env.local` file exists and has correct key

### Issue: "Port 3000 already in use"
**Solution**: 
```bash
# Kill the process or use different port
npm run dev -- -p 3001
```

### Issue: Upload fails silently
**Solution**: Check browser console (F12) for errors

### Issue: Slow processing
**Solution**: 
- Check internet connection
- Try smaller file
- Check Google AI API quota

## ✅ Final Verification

- [ ] All features working
- [ ] No errors in console
- [ ] Documentation reviewed
- [ ] Ready to use!

---

**Congratulations!** 🎉 DocuMind is set up and ready to use!

**Next Steps**:
1. Try with your own documents
2. Customize the UI (optional)
3. Deploy to production
4. Share with others!

**Need Help?**
- Check README.md
- Review QUICKSTART.md
- Open an issue on GitHub
