import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting us, ${form.name}!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-2xl shadow space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="4"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
