# Contributing to DocuMind

Thank you for your interest in contributing to DocuMind! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, browser, Node version)

### Suggesting Features

1. Check existing issues and discussions
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach
   - Any relevant examples or mockups

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/documind.git
   cd documind
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run dev
   # Test thoroughly in the browser
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   Use conventional commits:
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation changes
   - `style:` formatting, missing semicolons, etc.
   - `refactor:` code restructuring
   - `test:` adding tests
   - `chore:` maintenance tasks

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub

## Development Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Add your GOOGLE_API_KEY
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
documind/
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Home page
├── components/      # React components
├── lib/            # Utility functions
├── public/         # Static assets
└── ...config files
```

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type when possible

### React

- Use functional components
- Prefer hooks over class components
- Keep components small and focused
- Use meaningful component and variable names

### Styling

- Use Tailwind CSS classes
- Follow the existing design system
- Ensure responsive design (mobile-first)
- Test on different screen sizes

### API Routes

- Validate all inputs
- Handle errors gracefully
- Return appropriate status codes
- Add proper error messages

## Testing

Currently, the project doesn't have automated tests. Adding tests is a great way to contribute!

Potential testing areas:
- Document processing functions
- API endpoints
- Component rendering
- User interactions

## Documentation

When adding features:
- Update README.md if needed
- Add JSDoc comments to functions
- Update QUICKSTART.md for user-facing changes
- Add examples for complex features

## Areas for Contribution

### High Priority

- [ ] Add automated tests (Jest, React Testing Library)
- [ ] Implement multi-file upload support
- [ ] Add conversation history
- [ ] Support more file formats (DOCX, EPUB)
- [ ] Improve error handling and user feedback

### Medium Priority

- [ ] Add user authentication
- [ ] Implement conversation export
- [ ] Add dark mode toggle
- [ ] Improve mobile UI
- [ ] Add keyboard shortcuts

### Low Priority

- [ ] Add animations and transitions
- [ ] Implement themes/customization
- [ ] Add analytics dashboard
- [ ] Create browser extension
- [ ] Add voice input support

## Getting Help

- Open a discussion on GitHub
- Check existing issues and PRs
- Read the documentation
- Ask questions in issues (use the "question" label)

## Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Given credit in the project

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making DocuMind better! 🎉
