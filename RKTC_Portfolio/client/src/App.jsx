import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-400">RKTC Portfolio 🚀</h1>
          </div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App