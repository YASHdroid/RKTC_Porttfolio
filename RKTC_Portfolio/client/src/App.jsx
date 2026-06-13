import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import DealsIn from './pages/DealsIn';
import PastWork from './pages/PastWork';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/arg" element={
          <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-400">RKTC Portfolio 🚀</h1>
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deals" element={<DealsIn />} />
        <Route path="/pastwork" element={<PastWork />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App