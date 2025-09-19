
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

   const handleGoToProduct = () => {
    navigate('/products'); // Navigates to the /about route
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586201375754-59a5d9a7b4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Welcome to <span className="text-yellow-400">MyShop</span>
        </h1>
        <p className="text-gray-200 text-lg mt-4 max-w-xl mx-auto">
          Your one-stop shop for everything! Explore amazing products with great deals.
        </p>
        <button onClick={handleGoToProduct} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Shop Now
        </button>
      </div>
    </div>
  );
}

