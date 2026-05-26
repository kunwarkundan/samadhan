# Samadhan - React + Vite + Tailwind CSS

A modern web application demonstrating best practices in React development with routing and state management.

## Features

- ⚡ **Vite** - Lightning-fast build tool and development server
- ⚛️ **React 18** - Latest React with hooks and concurrent features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🗂️ **React Router** - Client-side routing for multi-page navigation
- 🏪 **Context API** - Global state management
- 🌙 **Theme Switching** - Light/Dark mode support
- 📦 **Modern tooling** - ESM modules, hot module replacement (HMR)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
samadhan/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   └── Navigation.jsx    # Navigation bar component
│   ├── context/         # Global state management
│   │   └── AppContext.jsx    # App-wide context provider
│   ├── pages/           # Page components
│   │   ├── Home.jsx          # Home page with counter
│   │   ├── About.jsx         # About page
│   │   ├── Dashboard.jsx     # Dashboard displaying state
│   │   └── NotFound.jsx      # 404 page
│   ├── App.jsx          # Main App component with routing
│   ├── main.jsx         # React DOM entry point
│   └── index.css        # Global styles with Tailwind imports
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Routing

The application uses React Router for client-side navigation:

- **`/`** - Home page with counter demo
- **`/about`** - About page with project information
- **`/dashboard`** - Dashboard showing global state
- **`/login`** - User login page
- **`/*`** - 404 Not Found page

## State Management

Global state is managed using React's Context API with the `AppContext`:

### Available State Values

- `counter` - Global counter value
- `theme` - Current theme ('light' or 'dark')

### Available Actions

- `increment()` - Increment the counter
- `decrement()` - Decrement the counter
- `resetCounter()` - Reset counter to 0
- `toggleTheme()` - Toggle between light and dark themes

### Using the Context

```javascript
import { useAppContext } from './context/AppContext'

function MyComponent() {
  const { counter, increment } = useAppContext()
  
  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
```

## Customization

### Tailwind CSS

Customize Tailwind CSS theme in `tailwind.config.js`. Refer to the [Tailwind documentation](https://tailwindcss.com/docs) for more options.

### Vite Configuration

Modify `vite.config.js` to adjust build settings, aliases, or server options.

### Adding New Routes

Edit [src/App.jsx](src/App.jsx) to add new routes:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

### Extending Global State

Modify [src/context/AppContext.jsx](src/context/AppContext.jsx) to add new state values and actions.

## Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Context API Guide](https://react.dev/reference/react/useContext)

## License

MIT
