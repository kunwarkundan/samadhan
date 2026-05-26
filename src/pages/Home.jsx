import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function Home() {
  const { counter, increment, decrement, resetCounter } = useAppContext()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Welcome to Samadhan
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          React + Vite + Tailwind CSS Application with Routing & State Management
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 mb-8">
          <p className="text-white text-center text-5xl font-bold">
            {counter}
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => decrement()}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Decrement
          </button>

          <button
            onClick={() => increment()}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Increment
          </button>
        </div>

        <button
          onClick={() => resetCounter()}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 mb-8"
        >
          Reset
        </button>

        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/about"
            className="text-center bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition"
          >
            About
          </Link>
          <Link
            to="/dashboard"
            className="text-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg transition"
          >
            Dashboard
          </Link>
        </div>

        <p className="text-gray-400 text-center text-sm mt-6">
          State is managed globally using Context API
        </p>
      </div>
    </div>
  )
}
