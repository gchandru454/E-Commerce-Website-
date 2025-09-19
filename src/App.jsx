import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CartDrawer/>
    </Router>
  );
}


// export default function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <h1 className="text-4xl font-bold text-blue-400">
//         🚀 React + Vite + Tailwind is Working!
//       </h1>
//     </div>
//   );
// }

