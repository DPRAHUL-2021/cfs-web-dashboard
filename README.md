# Customer Feedback Summarization (CFS) Web Dashboard

A modern, AI-powered web application for analyzing and summarizing customer feedback using Retrieval-Augmented Generation (RAG) pipelines. Built with React, TypeScript, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)

## ✨ Features

- **AI-Powered Insights**: Leverages advanced RAG pipelines for intelligent feedback analysis
- **Real-time Query Processing**: Interactive query section for instant feedback summarization
- **Beautiful UI/UX**: Premium design system with glassmorphism effects and gradient accents
- **Metrics Dashboard**: Comprehensive metrics and KPI visualization
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Eye-friendly dark mode optimized for extended usage
- **Component-Based Architecture**: Modular, reusable React components

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Testing**: Vitest
- **Linting**: ESLint
- **Package Manager**: Bun
- **Configuration**: PostCSS for CSS processing

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── AIInsights.tsx   # AI-powered insights display
│   ├── Footer.tsx       # Footer component
│   ├── HeroSection.tsx  # Landing hero section
│   ├── MetricsSection.tsx # Metrics and KPI display
│   ├── NavLink.tsx      # Navigation links
│   ├── QuerySection.tsx # User query interface
│   ├── RAGPipeline.tsx  # RAG pipeline visualization
│   └── ...              # Additional components
├── data/                # Static data and constants
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and helpers
├── pages/               # Page components
├── test/                # Test files
├── App.tsx              # Main application component
├── main.tsx             # React DOM entry point
├── index.css            # Global styles and design system
└── vite-env.d.ts        # Vite environment types
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16 or higher
- **Bun**: Latest version (or npm/yarn as alternative)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cfs-web-dashboard.git
   cd cfs-web-dashboard
   ```

2. **Install dependencies using Bun**
   ```bash
   bun install
   ```
   
   Or using npm:
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env.local` (if available)
   - Configure any required environment variables

## 💻 Usage

### Development Server

Start the development server with hot module replacement:

```bash
bun run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

Create an optimized production build:

```bash
bun run build
```

### Preview Production Build

Preview the production build locally:

```bash
bun run preview
```

## 📦 Available Scripts

All scripts are defined in `package.json`:

| Script | Description |
|--------|-------------|
| `dev` | Start development server with HMR |
| `build` | Build for production |
| `preview` | Preview production build |
| `lint` | Run ESLint to check code quality |
| `test` | Run Vitest test suite |
| `test:watch` | Run tests in watch mode |

## 🎨 Design System

The project includes a comprehensive design system with:

- **Color Palette**: Dark theme with vibrant accent colors
- **Typography**: Inter (body) and Plus Jakarta Sans (headings)
- **Components**:
  - Glass-morphism cards (`glass-card`)
  - Gradient text effects (`gradient-text`)
  - Glow effects (`glow-effect`, `glow-accent`)
  - Custom badges and metrics displays
  - Animated gradient backgrounds

### Key CSS Custom Properties

- Primary accent: Bright blue (`#60a5fa`)
- Secondary: Muted slate blue
- Accent: Teal/cyan (`#2dd4bf`)
- Background: Deep dark blue-gray (`#0f0f23`)

## 🧪 Testing

Run the test suite using Vitest:

```bash
bun run test
```

For continuous testing during development:

```bash
bun run test:watch
```

## 🔧 Configuration Files

- **vite.config.ts**: Vite build configuration
- **vitest.config.ts**: Vitest testing setup
- **tailwind.config.ts**: Tailwind CSS customization
- **tsconfig.json**: TypeScript compiler options
- **eslint.config.js**: Linting rules
- **postcss.config.js**: PostCSS configuration
- **components.json**: UI component configuration

## 🚀 Deployment

### Build and Deploy Steps

1. **Build the project**
   ```bash
   bun run build
   ```

2. **Deploy the `dist/` folder** to your hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting service

### Environment Variables

Ensure all required environment variables are set in your deployment platform before deploying.

## 📚 Key Components

- **AIInsights**: Displays AI-generated insights from customer feedback
- **QuerySection**: Interface for users to input and submit queries
- **RAGPipeline**: Visualizes the RAG pipeline process
- **MetricsSection**: Shows key metrics and analytics
- **HeroSection**: Landing page hero with compelling call-to-action

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

