import React from "react";
import "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


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

<section id="soma" className="py-5 text-center text-white">
  <div className="container">
    <h2 className="text-white display-4 my-4">Soma</h2>
    <div className="mx-auto mb-4" style={{ width: '300px',height: '200px', overflow: 'hidden', borderRadius: '0rem' }}>
  <img
    src="../assets/img/bg/soma.png"
    alt="Wabi Sabi SoMa Interior"
    className="object-cover w-100 h-100"
  />
</div>

    <p className="text-muted">MON - FRI: 11am – 2.30pm, 5 - 9.30pm</p>
    <p className="text-muted">SAT - SUN: 12pm – 4pm, 5 - 10pm</p>
    <p className="text-secondary my-4">
      <a href="tel:4158109793">(415) 810-9793</a>
    </p>
    <p className="text-secondary my-4">
      246 Ritch St APT 101, San Francisco, CA 94107
    </p>



    {/* Delivery Options Container */}
    <div className="d-flex justify-content-center align-items-start gap-4 flex-wrap">
      {/* Pick Up */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Pick Up</p>
        <a
          href="https://pickup-link-soma.com"
          className="btn btn-danger"
        >
          Order Now
        </a>
      </div>

      {/* DoorDash */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">DoorDash</p>
        <a
          href="https://doordash.com/soma"
          className="btn btn-danger"
        >
          Order Now
        </a>
      </div>

      {/* Grubhub */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Grubhub</p>
        <a
          href="https://grubhub.com/soma"
          className="btn btn-danger"
        >
          Order Now
        </a>
      </div>

      {/* Uber Eats */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Uber Eats</p>
        <a
          href="https://ubereats.com/soma"
          className="btn btn-danger"
        >
          Order Now
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Nob Hill Section */}
<section id="nobhill" className="py-5 text-center text-white bg-gray-900">
  <div className="container">
    <h2 className="text-white display-4 my-4">Nob Hill</h2>

    <div className="mx-auto mb-4" style={{ width: '300px',height: '200px', overflow: 'hidden', borderRadius: '0rem' }}>
      <img
        src="../assets/img/bg/nobhill.png"
        alt="Wabi Sabi Nob Hill Interior"
        className="object-cover w-100 h-100"
      />
    </div>

    <p className="text-muted">Open daily · 11am – 10pm</p>
    <p className="text-secondary my-4">
      <a href="tel:4151234567">(415) 123-4567</a>
    </p>
    <p className="text-secondary my-4">
      456 Nob Hill Ave, San Francisco, CA
    </p>

    {/* Delivery Options Container */}
    <div className="d-flex justify-content-center align-items-start gap-4 flex-wrap">
      {/* Pick Up */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Pick Up</p>
        <a
          href="https://pickup-link-nobhill.com"
          className="btn btn-danger"
        >
          Order Now
        </a>
      </div>

      {/* DoorDash */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">DoorDash</p>
        <a
          href="https://doordash.com/nobhill"
          className="btn btn-danger"
        >
          Order Now
        </a>
      </div>

      {/* Grubhub */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Grubhub</p>
        <a
          href="https://grubhub.com/nobhill"
          className="btn btn-danger"
        >
          Order Now
        </a>
      </div>

      {/* Uber Eats */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Uber Eats</p>
        <a
          href="https://ubereats.com/nobhill"
          className="btn btn-danger"
        >
          Order Now
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="text-center py-6 bg-black text-sm text-gray-500">
        © 2025 Wabi Sabi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
