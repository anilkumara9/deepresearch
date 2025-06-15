# 🧬 Deep Research AI Agent

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![OpenRouter](https://img.shields.io/badge/OpenRouter-AI-00A67E?style=for-the-badge)

[Features](#-features) •
[Tech Stack](#-tech-stack) •
[Getting Started](#-getting-started) •
[Project Structure](#-project-structure) •
[API Documentation](#-api-documentation) •
[Contributing](#-contributing)

</div>

## 📝 Overview

Deep Research AI Agent is an intelligent research assistant built with Next.js that specializes in protein structure research. It uses advanced AI capabilities to help researchers explore and understand complex topics through interactive questioning and guided exploration.

### 🌟 Key Benefits

- 🤖 **AI-Powered Insights**: Leverages OpenRouter's advanced AI models for intelligent research assistance
- 🎯 **Focused Exploration**: Specializes in protein structure research and related biological topics
- 💡 **Interactive Learning**: Engages users with contextual questions to refine research scope
- 🚀 **Modern Architecture**: Built with Next.js 15 for optimal performance and developer experience

## 🚀 Features

### Core Capabilities
- 🔍 **Smart Question Generation**
  - Context-aware question formulation
  - Research scope refinement
  - Topic-specific guidance

- 🎨 **Modern UI/UX**
  - Responsive design
  - Dark/Light mode support
  - Intuitive navigation
  - Real-time feedback

- 🔒 **Security & Performance**
  - Type-safe development
  - API key protection
  - Optimized builds
  - Error handling

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.2.4](https://nextjs.org/)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS 4.0](https://tailwindcss.com/)
  - [Radix UI](https://www.radix-ui.com/)
  - [Lucide Icons](https://lucide.dev/)

### Backend & AI
- **AI Integration**: 
  - [OpenRouter API](https://openrouter.ai/)
  - [AI SDK](https://sdk.vercel.ai/docs)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Form Handling**: 
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://github.com/colinhacks/zod)

## 📋 Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/) (LTS version)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [OpenRouter API Key](https://openrouter.ai/keys)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/deep-research-ai-agent.git
cd deep-research-ai-agent
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
OPENROUTER_API_KEY=your_api_key_here
```

### 4. Development
```bash
# Start development server
npm run dev
# or
yarn dev

# Build for production
npm run build
# or
yarn build

# Start production server
npm run start
# or
yarn start
```

## 🏗️ Project Structure

```
deep-research-ai-agent/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API routes
│   │   │   └── generate-questions/
│   │   └── components/        # React components
│   ├── lib/                   # Utility functions
│   └── styles/                # Global styles
├── public/                    # Static assets
├── components.json            # UI components config
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies
└── tsconfig.json             # TypeScript configuration
```

## 🔍 API Documentation

### Generate Questions Endpoint

#### POST `/api/generate-questions`

Generates contextual questions based on the research topic.

**Request Body:**
```json
{
  "topic": "string"  // Research topic
}
```

**Response:**
```json
[
  "Question 1?",
  "Question 2?",
  "Question 3?",
  "Question 4?"
]
```

**Error Handling:**
- Returns default questions if API fails
- Includes error logging
- Graceful fallback mechanism

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenRouter](https://openrouter.ai/) for AI capabilities
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- All contributors who have helped shape this project

## 📧 Support & Contact

- **GitHub Issues**: [Create an issue](https://github.com/yourusername/deep-research-ai-agent/issues)
- **Documentation**: [Wiki](https://github.com/yourusername/deep-research-ai-agent/wiki)
- **Email**: your.email@example.com

---

<div align="center">

Made with ❤️ by [Your Name]

[![GitHub stars](https://img.shields.io/github/stars/yourusername/deep-research-ai-agent?style=social)](https://github.com/yourusername/deep-research-ai-agent/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/deep-research-ai-agent?style=social)](https://github.com/yourusername/deep-research-ai-agent/network/members)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/deep-research-ai-agent?style=social)](https://github.com/yourusername/deep-research-ai-agent/issues)

</div>
