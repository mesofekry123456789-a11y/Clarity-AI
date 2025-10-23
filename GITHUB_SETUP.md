# 🚀 Publishing DocuMind to GitHub

Complete guide to get your project on GitHub.

## 📋 Prerequisites

- [ ] GitHub account ([Sign up free](https://github.com/signup))
- [ ] Git installed on your computer
- [ ] Project files ready (you have them!)

## 🔍 Check if Git is Installed

```bash
git --version
```

**If not installed**:
- Windows: Download from https://git-scm.com/download/win
- Mac: `brew install git` or download from https://git-scm.com
- Linux: `sudo apt-get install git`

## 🎯 Step-by-Step Guide

### Step 1: Initialize Git Repository

Open terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Check status
git status
```

### Step 2: Configure Git (First Time Only)

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

### Step 3: Add All Files

```bash
# Add all files to staging
git add .

# Verify what will be committed
git status
```

### Step 4: Create First Commit

```bash
# Commit with a message
git commit -m "Initial commit: DocuMind AI Research Assistant MVP"

# Verify commit
git log --oneline
```

### Step 5: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new

2. **Fill in details**:
   - Repository name: `documind` (or `clarity-ai`)
   - Description: `Free AI Research Assistant - Chat with your documents using Google Gemini`
   - Visibility: Choose **Public** (recommended) or **Private**
   - ⚠️ **DO NOT** initialize with README, .gitignore, or license (we already have these)

3. **Click** "Create repository"

### Step 6: Connect Local to GitHub

GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/documind.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` with your actual GitHub username!

### Step 7: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files!
3. Check that README.md displays properly

## ✅ Success Checklist

After pushing, verify:

- [ ] All files are visible on GitHub
- [ ] README.md displays on the main page
- [ ] `.env.local` is NOT uploaded (check .gitignore)
- [ ] Documentation files are readable
- [ ] Repository description is set

## 🔒 Security Check

**IMPORTANT**: Verify these files are NOT on GitHub:

- ❌ `.env.local` (contains your API key)
- ❌ `node_modules/` (too large)
- ❌ `.next/` (build artifacts)

These should be in `.gitignore` (already configured).

**If you accidentally uploaded `.env.local`**:
1. Delete it from GitHub
2. Regenerate your API key immediately
3. Update `.env.local` locally

## 📝 Update Repository Details

On GitHub repository page:

1. **Add description**: "Free AI Research Assistant - Chat with your documents"
2. **Add website**: Your Vercel URL (after deployment)
3. **Add topics**: `ai`, `nextjs`, `gemini`, `langchain`, `research`, `chatbot`, `pdf`, `typescript`
4. **Add README**: Should already display automatically

## 🎨 Customize Repository

### Add a License

Already included! The project uses MIT License.

### Add Repository Image

1. Go to repository Settings
2. Upload a social preview image (1280x640px)
3. Or create one at https://www.canva.com

### Enable Discussions (Optional)

1. Go to Settings
2. Scroll to Features
3. Enable Discussions

### Enable Issues

Should be enabled by default for bug reports and feature requests.

## 🔄 Making Updates

After making changes to your code:

```bash
# Check what changed
git status

# Add changes
git add .

# Commit with descriptive message
git commit -m "Add: new feature description"

# Push to GitHub
git push
```

## 📊 Commit Message Best Practices

Use clear, descriptive messages:

```bash
# Good examples
git commit -m "Add: multi-file upload support"
git commit -m "Fix: PDF parsing error for large files"
git commit -m "Update: README with deployment instructions"
git commit -m "Refactor: improve vector store performance"

# Use prefixes
# Add: new feature
# Fix: bug fix
# Update: changes to existing feature
# Refactor: code improvement
# Docs: documentation changes
```

## 🌿 Working with Branches (Optional)

For new features:

```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add: new feature"

# Push branch to GitHub
git push -u origin feature/new-feature

# Create Pull Request on GitHub
# Merge when ready
```

## 🚀 Next Steps After GitHub

### 1. Deploy to Vercel

See [DEPLOYMENT.md](DEPLOYMENT.md) for instructions.

Vercel can auto-deploy from GitHub:
- Connect your GitHub account
- Select the repository
- Add environment variables
- Deploy!

### 2. Add Badges to README

Add these to the top of README.md:

```markdown
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)
```

### 3. Share Your Project

- Tweet about it
- Post on Reddit (r/webdev, r/nextjs)
- Share on LinkedIn
- Add to your portfolio

### 4. Invite Contributors

- Add CONTRIBUTING.md (already included!)
- Label issues as "good first issue"
- Welcome pull requests

## 🐛 Troubleshooting

### "Permission denied (publickey)"

**Solution**: Set up SSH key or use HTTPS

```bash
# Use HTTPS instead
git remote set-url origin https://github.com/YOUR_USERNAME/documind.git
```

### "Repository not found"

**Solution**: Check repository name and username

```bash
# Verify remote URL
git remote -v

# Update if needed
git remote set-url origin https://github.com/CORRECT_USERNAME/CORRECT_REPO.git
```

### "Failed to push"

**Solution**: Pull first, then push

```bash
git pull origin main --rebase
git push
```

### Large files rejected

**Solution**: Files over 100MB are rejected. Remove them:

```bash
# Remove from git (but keep locally)
git rm --cached large-file.pdf

# Add to .gitignore
echo "large-file.pdf" >> .gitignore

# Commit and push
git commit -m "Remove large file"
git push
```

## 📚 Useful Git Commands

```bash
# View commit history
git log --oneline --graph

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- filename

# View differences
git diff

# Create .gitignore
echo "node_modules/" >> .gitignore
echo ".env.local" >> .gitignore

# Remove file from git but keep locally
git rm --cached filename

# Clone your repository elsewhere
git clone https://github.com/YOUR_USERNAME/documind.git
```

## 🎯 Quick Reference

```bash
# Daily workflow
git status              # Check changes
git add .              # Stage all changes
git commit -m "msg"    # Commit changes
git push               # Push to GitHub

# Syncing
git pull               # Get latest changes
git fetch              # Check for updates

# Branching
git branch             # List branches
git checkout -b name   # Create branch
git merge branch-name  # Merge branch
```

## 🔗 Useful Links

- **GitHub Docs**: https://docs.github.com
- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **GitHub Desktop**: https://desktop.github.com (GUI alternative)
- **GitKraken**: https://www.gitkraken.com (Advanced GUI)

## ✨ Make Your Repository Stand Out

1. **Good README**: Clear description, screenshots, demo
2. **Active Issues**: Respond to bug reports
3. **Regular Updates**: Commit frequently
4. **Documentation**: Keep docs up to date
5. **Community**: Welcome contributors
6. **Examples**: Add demo files or videos
7. **Badges**: Show build status, version, etc.

## 🎉 You're Done!

Your project is now on GitHub! 🚀

**Repository URL**: `https://github.com/YOUR_USERNAME/documind`

Share it with the world! ⭐

---

**Need help?** Check GitHub's documentation or open an issue!
