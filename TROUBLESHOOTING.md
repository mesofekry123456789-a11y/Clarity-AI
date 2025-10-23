# Troubleshooting Guide

Common issues and their solutions.

## 🚨 Installation Issues

### Problem: `npm install` fails

**Symptoms**:
- Error messages during installation
- Missing dependencies
- Network errors

**Solutions**:

1. **Clear npm cache**
   ```bash
   npm cache clean --force
   npm install
   ```

2. **Delete and reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check Node version**
   ```bash
   node --version
   # Should be 18.x or higher
   ```

4. **Use different registry**
   ```bash
   npm install --registry=https://registry.npmjs.org/
   ```

### Problem: `canvas` or `encoding` errors

**Symptoms**:
- Build warnings about canvas
- Module not found errors

**Solution**:
These are handled in `next.config.mjs`. If issues persist:
```bash
npm install --legacy-peer-deps
```

## 🔑 API Key Issues

### Problem: "API key not configured"

**Symptoms**:
- Error when uploading document
- 500 error in browser console

**Solutions**:

1. **Check `.env.local` exists**
   ```bash
   # Windows
   dir .env.local
   
   # Mac/Linux
   ls -la .env.local
   ```

2. **Verify API key format**
   ```env
   # Correct
   GOOGLE_API_KEY=AIzaSyD...your_key_here
   
   # Wrong (no quotes, no spaces)
   GOOGLE_API_KEY="AIzaSyD...your_key_here"
   GOOGLE_API_KEY = AIzaSyD...your_key_here
   ```

3. **Restart development server**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

4. **Get new API key**
   - Visit https://makersuite.google.com/app/apikey
   - Create new key
   - Replace in `.env.local`

### Problem: "API quota exceeded"

**Symptoms**:
- Errors after several requests
- "Rate limit exceeded" messages

**Solutions**:

1. **Check quota**
   - Visit https://makersuite.google.com/app/apikey
   - View usage statistics

2. **Wait and retry**
   - Free tier: 60 requests/minute
   - Resets after 1 minute

3. **Optimize requests**
   - Use smaller documents
   - Reduce chunk size
   - Ask fewer questions

## 📁 File Upload Issues

### Problem: Upload fails silently

**Symptoms**:
- File selected but nothing happens
- No error message

**Solutions**:

1. **Check browser console**
   - Press F12
   - Look for errors in Console tab

2. **Verify file type**
   - Only PDF and TXT supported
   - Check file extension

3. **Check file size**
   - Maximum 10MB
   - Compress large PDFs

4. **Try different file**
   - Test with simple TXT file
   - Verify PDF isn't corrupted

### Problem: "Failed to extract text from PDF"

**Symptoms**:
- Error message after upload
- Processing fails

**Solutions**:

1. **Check PDF format**
   - Some PDFs are image-based (scanned)
   - Try text-based PDF

2. **Try converting PDF**
   - Use online PDF to text converter
   - Save as TXT file

3. **Check PDF integrity**
   - Open in PDF reader
   - Verify text is selectable

### Problem: Processing takes too long

**Symptoms**:
- "Analyzing document..." never completes
- Timeout errors

**Solutions**:

1. **Check file size**
   - Large files (>5MB) take longer
   - Try smaller document

2. **Check internet connection**
   - API calls require stable connection
   - Test with speed test

3. **Wait longer**
   - First upload takes 30-60 seconds
   - Subsequent uploads are faster

4. **Check server logs**
   - Look at terminal running `npm run dev`
   - Check for error messages

## 💬 Chat Issues

### Problem: No response to questions

**Symptoms**:
- "Thinking..." never completes
- No answer appears

**Solutions**:

1. **Check browser console**
   - Press F12
   - Look for network errors

2. **Verify document was processed**
   - Try uploading again
   - Check for success message

3. **Check API key**
   - Verify in `.env.local`
   - Test with simple question

4. **Restart server**
   ```bash
   # Stop (Ctrl+C) and restart
   npm run dev
   ```

### Problem: Irrelevant answers

**Symptoms**:
- Answers don't match document
- Generic responses

**Solutions**:

1. **Ask more specific questions**
   - Include keywords from document
   - Be clear and detailed

2. **Check document quality**
   - Ensure text was extracted correctly
   - Try different document

3. **Verify sources**
   - Click source citations
   - Check if relevant text was found

### Problem: "I couldn't find relevant information"

**Symptoms**:
- AI can't answer question
- No sources found

**Solutions**:

1. **Rephrase question**
   - Use different words
   - Be more specific

2. **Check if info is in document**
   - Verify document contains answer
   - Try broader question

3. **Document might be too short**
   - Need sufficient content
   - Try longer document

## 🌐 Development Server Issues

### Problem: Port 3000 already in use

**Symptoms**:
- Error: "Port 3000 is already in use"
- Server won't start

**Solutions**:

1. **Use different port**
   ```bash
   npm run dev -- -p 3001
   ```

2. **Kill existing process (Windows)**
   ```bash
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

3. **Kill existing process (Mac/Linux)**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

### Problem: Changes not reflecting

**Symptoms**:
- Code changes don't appear
- Old version still showing

**Solutions**:

1. **Hard refresh browser**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

2. **Clear Next.js cache**
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Restart server**
   ```bash
   # Stop (Ctrl+C) and restart
   npm run dev
   ```

### Problem: Build errors

**Symptoms**:
- `npm run build` fails
- TypeScript errors

**Solutions**:

1. **Check TypeScript errors**
   ```bash
   npx tsc --noEmit
   ```

2. **Fix linting issues**
   ```bash
   npm run lint -- --fix
   ```

3. **Clear cache and rebuild**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

## 🎨 UI/Display Issues

### Problem: Styling not working

**Symptoms**:
- No colors or styling
- Plain HTML appearance

**Solutions**:

1. **Check Tailwind is loaded**
   - Verify `globals.css` imported
   - Check browser console for errors

2. **Rebuild**
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Verify Tailwind config**
   - Check `tailwind.config.ts`
   - Ensure paths are correct

### Problem: Dark mode not working

**Symptoms**:
- Always light or dark
- Doesn't follow system preference

**Solutions**:

1. **Check system settings**
   - Verify OS dark mode setting
   - Try toggling system preference

2. **Clear browser cache**
   - Hard refresh (Ctrl+Shift+R)
   - Clear site data

3. **Check CSS**
   - Verify dark mode classes in `globals.css`

### Problem: Mobile layout broken

**Symptoms**:
- UI doesn't fit on mobile
- Elements overlapping

**Solutions**:

1. **Check viewport meta tag**
   - Should be in `layout.tsx`

2. **Test responsive classes**
   - Use browser dev tools
   - Toggle device toolbar

3. **Check Tailwind breakpoints**
   - Verify `md:`, `sm:` classes

## 🚀 Deployment Issues

### Problem: Vercel build fails

**Symptoms**:
- Deployment fails
- Build errors in Vercel logs

**Solutions**:

1. **Check build locally**
   ```bash
   npm run build
   ```

2. **Verify environment variables**
   - Check Vercel dashboard
   - Ensure `GOOGLE_API_KEY` is set

3. **Check Node version**
   - Vercel uses Node 18 by default
   - Match local version

4. **Review build logs**
   - Check Vercel deployment logs
   - Fix specific errors

### Problem: Environment variables not working in production

**Symptoms**:
- Works locally, fails in production
- API key errors

**Solutions**:

1. **Check Vercel environment variables**
   - Go to Project Settings
   - Verify variables are set
   - Check they're enabled for Production

2. **Redeploy**
   - After adding variables
   - Trigger new deployment

3. **Check variable names**
   - Must match exactly
   - Case-sensitive

## 🐛 Common Errors

### Error: "Module not found"

**Solution**:
```bash
npm install
# or
npm install <missing-module>
```

### Error: "Cannot find module '@/...' "

**Solution**:
Check `tsconfig.json` has correct paths:
```json
"paths": {
  "@/*": ["./*"]
}
```

### Error: "Hydration failed"

**Solution**:
- Check for mismatched HTML
- Ensure server and client render same content
- Remove any browser-only code from initial render

### Error: "fetch failed"

**Solution**:
- Check internet connection
- Verify API endpoint is correct
- Check CORS settings

## 📊 Performance Issues

### Problem: Slow upload processing

**Solutions**:
- Use smaller documents
- Check internet speed
- Reduce chunk size in `documentProcessor.ts`

### Problem: Slow chat responses

**Solutions**:
- Check API quota
- Reduce number of retrieved chunks
- Use faster internet connection

### Problem: High memory usage

**Solutions**:
- Restart development server
- Process smaller documents
- Clear browser cache

## 🔍 Debugging Tips

1. **Check browser console**
   - Press F12
   - Look for errors in Console tab

2. **Check network tab**
   - See API requests/responses
   - Check for failed requests

3. **Check server logs**
   - Terminal running `npm run dev`
   - Look for error messages

4. **Add console.logs**
   - Debug specific functions
   - Track data flow

5. **Use React DevTools**
   - Install browser extension
   - Inspect component state

## 🆘 Still Having Issues?

1. **Check documentation**
   - README.md
   - QUICKSTART.md
   - Other guides

2. **Search existing issues**
   - GitHub Issues
   - Stack Overflow

3. **Create new issue**
   - Provide error messages
   - Include steps to reproduce
   - Share environment details

4. **Ask for help**
   - GitHub Discussions
   - Community forums

## 📝 Reporting Bugs

When reporting issues, include:

1. **Environment**
   - OS and version
   - Node version
   - Browser and version

2. **Steps to reproduce**
   - What you did
   - What happened
   - What you expected

3. **Error messages**
   - Full error text
   - Screenshots
   - Console logs

4. **Code snippets**
   - Relevant code
   - Configuration files

---

**Remember**: Most issues can be solved by:
1. Restarting the server
2. Clearing cache
3. Reinstalling dependencies
4. Checking environment variables
