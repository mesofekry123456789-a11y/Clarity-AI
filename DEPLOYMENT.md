# Deployment Guide

This guide will help you deploy DocuMind to production.

## Deploying to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and offers a generous free tier.

### Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Google AI API key

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In the Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add: `GOOGLE_API_KEY` with your API key value
   - Make sure it's available for Production, Preview, and Development

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (2-3 minutes)
   - Your app will be live at `https://your-project.vercel.app`

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Deploying to Other Platforms

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variable: `GOOGLE_API_KEY`

### Railway

1. Connect your GitHub repository
2. Add environment variable: `GOOGLE_API_KEY`
3. Railway will auto-detect and deploy

### Docker (Self-hosted)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t documind .
docker run -p 3000:3000 -e GOOGLE_API_KEY=your_key documind
```

## Environment Variables

Required for all deployments:

- `GOOGLE_API_KEY`: Your Google AI API key

## Post-Deployment Checklist

- [ ] Test file upload with a sample PDF
- [ ] Test chat functionality
- [ ] Verify source citations are working
- [ ] Check mobile responsiveness
- [ ] Test error handling (try uploading invalid files)
- [ ] Monitor API usage in Google AI Studio

## Monitoring & Analytics

### Google AI API Usage

Monitor your API usage at:
https://makersuite.google.com/app/apikey

Free tier limits:
- 60 requests per minute
- 1,500 requests per day

### Vercel Analytics

Enable analytics in your Vercel dashboard to track:
- Page views
- Performance metrics
- User engagement

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+
- Review build logs for specific errors

### API Key Issues

- Verify the environment variable is set correctly
- Check API key is active in Google AI Studio
- Ensure no extra spaces in the key

### Performance Issues

- Consider upgrading to a paid Vercel plan for better performance
- Optimize chunk size in `documentProcessor.ts`
- Reduce the number of similar documents retrieved

## Scaling Considerations

For production use with many users:

1. **Database**: Replace in-memory vector store with a persistent solution (Pinecone, Weaviate)
2. **File Storage**: Use cloud storage (AWS S3, Google Cloud Storage)
3. **Rate Limiting**: Implement rate limiting to prevent abuse
4. **Caching**: Add Redis for caching frequent queries
5. **Authentication**: Add user authentication (NextAuth.js)

## Security Best Practices

- Never commit `.env` files
- Use environment variables for all secrets
- Enable CORS only for your domain
- Implement rate limiting
- Add file upload size limits
- Sanitize user inputs
- Keep dependencies updated

## Support

For deployment issues, check:
- Vercel documentation: https://vercel.com/docs
- Next.js deployment guide: https://nextjs.org/docs/deployment
- GitHub issues for this project
