
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

export default function Navbar() {
  const { cart } = useCartStore();

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 shadow-lg flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide text-yellow-400">
        🛒 MyShop
      </h1>

      {/* Links */}
      <div className="flex gap-6 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          Contact
        </Link>

        {/* Cart Badge */}
        <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold shadow-md hover:bg-yellow-300 transition-colors">
          Cart ({cart.length})
        </span>
      </div>
    </nav>
  );
}

