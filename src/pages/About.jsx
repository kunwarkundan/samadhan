import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto mt-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Samadhan</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-indigo-600 mb-3">What is Samadhan?</h2>
              <p>
                Samadhan is a modern web application demonstrating best practices in React development. 
                It showcases routing, state management, and responsive UI design using cutting-edge technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-600 mb-3">Technologies Used</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>React 18</strong> - Modern UI library with hooks</li>
                <li><strong>Vite</strong> - Lightning-fast build tool and dev server</li>
                <li><strong>React Router</strong> - Client-side routing</li>
                <li><strong>Context API</strong> - Global state management</li>
                <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-600 mb-3">Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Multi-page routing with React Router</li>
                <li>Global state management with Context API</li>
                <li>Theme switching (Light/Dark mode)</li>
                <li>Counter with global state</li>
                <li>Responsive design with Tailwind CSS</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-600 mb-3">Learn More</h2>
              <p>
                Visit the official documentation for each technology to learn more about the libraries we use:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">React Documentation</a></li>
                <li><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Vite Documentation</a></li>
                <li><a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">React Router Documentation</a></li>
                <li><a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Tailwind CSS Documentation</a></li>
              </ul>
            </section>
          </div>

          <Link
            to="/"
            className="inline-block mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
