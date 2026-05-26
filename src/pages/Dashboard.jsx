import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function Dashboard() {
  const { counter, theme } = useAppContext()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} p-4`}>
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* State Info Card */}
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              State Information
            </h2>
            <div className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="flex justify-between">
                <span>Counter Value:</span>
                <span className="font-bold text-lg text-blue-500">{counter}</span>
              </div>
              <div className="flex justify-between">
                <span>Theme:</span>
                <span className="font-bold capitalize text-indigo-500">{theme}</span>
              </div>
            </div>
          </div>

          {/* Statistics Card */}
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6`}>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Statistics
            </h2>
            <div className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <div>
                <p className="text-sm text-gray-500">Counter Percentage</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${Math.min((counter / 100) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1">{Math.min(counter, 100)} / 100</p>
              </div>
              <div className="pt-3 border-t border-gray-300">
                <p className="text-sm">
                  The counter demonstrates global state management through Context API.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-8`}>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            App Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <span>React Router for multi-page navigation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              <span>Tailwind CSS for responsive design</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌙</span>
              <span>Theme switching (Light/Dark mode)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span>Context API for state management</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <span>Vite for fast development</span>
            </div>
          </div>
        </div>

        <Link
          to="/"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
