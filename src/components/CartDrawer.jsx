import { useState } from "react";
import useCartStore from "../store/useCartStore";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart, clearCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        🛒 {cart.length}
      </button>

     
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

     
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600 text-xl">
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[70%]">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty 🛒</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✖
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 border-t">
            <p className="font-semibold text-lg mb-2">Total: ₹{total}</p>
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
            <button
              className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 mt-2 transition"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
