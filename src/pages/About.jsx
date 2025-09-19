export default function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 leading-relaxed">
        Welcome to <span className="font-semibold text-blue-600">MyShop</span>!  
        We are passionate about bringing you high-quality products at affordable prices.  
        Our mission is to make online shopping simple, enjoyable, and reliable.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-100 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become your favorite destination for online shopping.
          </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <p className="text-gray-600">
            Quality, trust, and customer satisfaction are at the heart of what we do.
          </p>
        </div>
      </div>
    </div>
  );
}
