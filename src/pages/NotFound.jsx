import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          404
        </h1>
        
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
