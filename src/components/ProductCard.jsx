import useCartStore from "../store/useCartStore";

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore();

  return (
    <div className="border rounded-2xl shadow p-4 text-center hover:shadow-lg transition">
      <img src={product.image} alt={product.name} height={500}className="w-full object-cover rounded-xl"/>
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-2 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
