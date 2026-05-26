import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function Navigation() {
  const { theme, toggleTheme } = useAppContext()

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex gap-6">
          <Link to="/" className="font-bold text-xl hover:text-blue-500 transition">
            Samadhan
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/dashboard" className="hover:text-blue-500 transition">
            Dashboard
          </Link>
        </div>
        
        <div className="flex gap-4 items-center">
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}
