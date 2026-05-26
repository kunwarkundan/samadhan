import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto mt-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
        <Link
            to="/"
            className="inline-block mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Samadhan</h1>
          
          

          
        </div>
      </div>
    </div>
  )
}
