import ProductCard from "../components/ProductCard";
import tshirt from '../assets/t-shirt.png';
import watch from '../assets/watch.png';
import shoes from '../assets/shoes.png';


const products = [
{ id: 1, name: "T-shirt", price: 499, image: tshirt},
  { id: 2, name: "Shoes", price: 1499, image: shoes },
  { id: 3, name: "Watch", price: 999, image: watch },
];

export default function Products() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
