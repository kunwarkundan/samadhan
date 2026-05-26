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
            Get hassle-free solutions for all your home and office needs with SAMADHAN.
        </p>

        
      </div>
    </div>
  )
}
