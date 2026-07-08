import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import DealsIn from "./pages/DealsIn";
import PastWork from "./pages/PastWork";
import Inquiries from "./pages/admin/Inquiries";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deals" element={<DealsIn />} />
        <Route path="/pastwork" element={<PastWork />} />
        <Route path="/admin/inquiries" element={<Inquiries />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;