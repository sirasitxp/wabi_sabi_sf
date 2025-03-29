import React from "react";
import "./index.scss";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 sticky top-0 z-50 bg-black/90 backdrop-blur">
        <h1 className="text-2xl font-bold text-red-700">Wabi Sabi</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#soma" className="hover:text-red-500 transition">Soma</a>
          <a href="#nobhill" className="hover:text-red-500 transition">Nob Hill</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
  <h2>Sushi With Soul</h2>
  <p>Two San Francisco spots. One unforgettable experience.</p>
  <div className="hero-buttons">
    <a href="#soma">Order from Soma</a>
    <a href="#nobhill">Order from Nob Hill</a>
  </div>
</section>


      {/* Soma Section */}
      <section id="soma" className="py-16 px-4 md:px-20 bg-gray-800">
        <h3 className="text-3xl font-bold mb-4">Soma Location</h3>
        <p className="mb-2 text-gray-300">123 Soma St, San Francisco, CA</p>
        <p className="mb-4 text-gray-400">Open daily: 11am - 10pm</p>
        <a
          href="https://ordering-link-soma.com"
          className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded text-white"
        >
          Order Online
        </a>
      </section>

      {/* Nob Hill Section */}
      <section id="nobhill" className="py-16 px-4 md:px-20 bg-gray-900">
        <h3 className="text-3xl font-bold mb-4">Nob Hill Location</h3>
        <p className="mb-2 text-gray-300">456 Nob Hill Ave, San Francisco, CA</p>
        <p className="mb-4 text-gray-400">Open daily: 11am - 10pm</p>
        <a
          href="https://ordering-link-nobhill.com"
          className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded text-white"
        >
          Order Online
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-sm text-gray-500">
        © 2025 Wabi Sabi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
