# Samadhan - React + Vite + Tailwind CSS with Routing & State Management

## Project Setup Instructions

This is a React + Vite + Tailwind CSS application with React Router for client-side routing and Context API for global state management.

### Development Workflow

- **Development Server**: `npm run dev` - Start the development server on port 5173
- **Build**: `npm run build` - Create a production build
- **Preview**: `npm run preview` - Preview the production build locally

### Key Technologies

- **React 18**: Modern JavaScript UI library with hooks
- **Vite**: Fast build tool with instant server start (< 1s)
- **React Router**: Client-side routing for multi-page navigation
- **Context API**: Global state management for counter and theme
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

### Folder Structure

- `src/` - Application source code
- `src/components/` - Reusable React components (Navigation, etc.)
- `src/context/` - Global state management (AppContext)
- `src/pages/` - Page components (Home, About, Dashboard, NotFound)
- `public/` - Static assets
- `dist/` - Production build output (created after build)

### Important Files

- `src/App.jsx` - Main app component with React Router setup
- `src/context/AppContext.jsx` - Global state provider using Context API
- `src/components/Navigation.jsx` - Navigation bar component
- `src/pages/` - Page components for different routes
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS theme customization
- `postcss.config.js` - PostCSS plugins configuration
- `index.html` - HTML entry point

### Available Routes

- `/` - Home page with counter demo and state management
- `/about` - About page with project information
- `/dashboard` - Dashboard displaying global state values
- `/*` - 404 Not Found page

### Get Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:5173 in your browser
4. Navigate using the menu to explore different pages
5. Start editing files in `src/` directory

For more details, see [README.md](../README.md)
