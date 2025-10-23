# Useful Commands

Quick reference for common development tasks.

## 📦 Installation

```bash
# Install all dependencies
npm install

# Install specific package
npm install package-name

# Install dev dependency
npm install -D package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Start on different port
npm run dev -- -p 3001

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🔧 Troubleshooting

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list --depth=0

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix
```

## 📁 File Operations

```bash
# Create new component
touch components/NewComponent.tsx

# Create new API route
mkdir -p app/api/newroute
touch app/api/newroute/route.ts

# Create new utility
touch lib/newUtil.ts
```

## 🔍 Code Quality

```bash
# Format code (if Prettier is installed)
npx prettier --write .

# Type check
npx tsc --noEmit

# Check bundle size
npm run build
# Check .next/static/chunks
```

## 🌐 Git Commands

```bash
# Initialize repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# View status
git status

# View commit history
git log --oneline
```

## 🚢 Deployment

```bash
# Deploy to Vercel (if Vercel CLI installed)
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

## 🔐 Environment Variables

```bash
# Copy example env file
cp .env.example .env.local

# View environment variables (Linux/Mac)
cat .env.local

# View environment variables (Windows)
type .env.local

# Edit environment variables
# Use your preferred text editor
code .env.local  # VS Code
notepad .env.local  # Windows Notepad
```

## 📊 Performance

```bash
# Analyze bundle size
npm run build
# Then check .next/analyze

# Check lighthouse score
npx lighthouse http://localhost:3000

# Profile build
npm run build -- --profile
```

## 🐛 Debugging

```bash
# Run with Node debugger
node --inspect node_modules/.bin/next dev

# Enable verbose logging
DEBUG=* npm run dev

# Check for TypeScript errors
npx tsc --noEmit --watch
```

## 📦 Package Management

```bash
# View package info
npm info package-name

# View package versions
npm view package-name versions

# Install specific version
npm install package-name@1.2.3

# Uninstall package
npm uninstall package-name

# Clean npm cache
npm cache clean --force
```

## 🔄 Updates

```bash
# Update Next.js
npm install next@latest react@latest react-dom@latest

# Update all dependencies to latest
npx npm-check-updates -u
npm install

# Update specific package
npm install package-name@latest
```

## 📱 Mobile Testing

```bash
# Find local IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Access from mobile
# http://YOUR_IP:3000
```

## 🧹 Cleanup

```bash
# Remove build artifacts
rm -rf .next out

# Remove dependencies
rm -rf node_modules

# Remove lock files
rm package-lock.json

# Full clean install
rm -rf node_modules package-lock.json .next
npm install
```

## 📝 Documentation

```bash
# Generate API documentation (if configured)
npm run docs

# Serve documentation
npm run docs:serve
```

## 🔧 VS Code Tasks

Add to `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "dev",
      "type": "npm",
      "script": "dev",
      "problemMatcher": [],
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    },
    {
      "label": "build",
      "type": "npm",
      "script": "build",
      "problemMatcher": []
    }
  ]
}
```

## 🎯 Quick Fixes

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Module Not Found
```bash
npm install
# or
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
npx tsc --noEmit
# Fix errors, then
npm run dev
```

### Build Errors
```bash
rm -rf .next
npm run build
```

## 🚀 Production Checklist

```bash
# 1. Run tests
npm test

# 2. Check types
npx tsc --noEmit

# 3. Lint code
npm run lint

# 4. Build
npm run build

# 5. Test production build
npm start

# 6. Deploy
git push origin main
```

## 📊 Monitoring

```bash
# Check build size
npm run build
du -sh .next

# Monitor memory usage
node --expose-gc --max-old-space-size=4096 node_modules/.bin/next dev

# Profile performance
NODE_ENV=production npm run build -- --profile
```

## 🔍 Search & Replace

```bash
# Find in files (Linux/Mac)
grep -r "search term" .

# Find and replace (Linux/Mac)
find . -type f -name "*.tsx" -exec sed -i 's/old/new/g' {} +

# Windows (PowerShell)
Get-ChildItem -Recurse -Filter *.tsx | ForEach-Object {
  (Get-Content $_.FullName) -replace 'old', 'new' | Set-Content $_.FullName
}
```

## 💡 Tips

1. **Use npm scripts**: Define custom scripts in `package.json`
2. **Keep dependencies updated**: Run `npm outdated` regularly
3. **Use environment variables**: Never commit secrets
4. **Clean builds**: Remove `.next` when switching branches
5. **Check logs**: Use `console.log` for debugging
6. **Use TypeScript**: Catch errors early
7. **Test locally**: Always test before deploying
8. **Monitor performance**: Use Lighthouse and Web Vitals

## 🆘 Getting Help

```bash
# Next.js help
npx next --help

# npm help
npm help

# Check documentation
npm docs package-name

# View package README
npm repo package-name
```

---

**Pro Tip**: Create aliases for frequently used commands in your shell configuration!

Example (add to `.bashrc` or `.zshrc`):
```bash
alias ndev="npm run dev"
alias nbuild="npm run build"
alias nstart="npm start"
```
