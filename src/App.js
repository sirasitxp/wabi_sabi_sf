import React from "react";
import AccessibilityToggle from './components/AccessibilityToggle';

import "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 sticky top-0 z-50 bg-black/90 backdrop-blur">
        <a href="/" style={{ textDecoration: 'none' }}><h1 className="text-2xl font-bold text-red-700">Wabi Sabi</h1></a>
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
          href="https://www.wabisabisf.com/?owg-fulfillment=pickup&fulfillment=PICKUP&location=11ec680ae7af1921a0fdac1f6bbbd01e&location_id=L3TNNQ61D5BJW&rwg_token=AAiGsoZnrl-qF9EVaPvFhOvUXfSvgKVMS9vt8Y-7nQCDDn9g1GTPMHYeiwCwupbWeF-bTqYCFS2yot-1LxHbcXUirS0uQKcLjA%3D%3D"
          className="btn btn-custom"
          target="_blank"  rel="noopener noreferrer"
        >
          Order from <br></br>SOMA
          </a>
      </div>

      {/* DoorDash */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">DoorDash</p>
        <a
          href="https://www.doordash.com/store/wabi-sabi-sf-san-francisco-2832215/?utm_campaign=gpa&pickup=true&rwg_token=AAiGsoYqaQCKjj_dD3_BmVBRyV5mnuOytgHLOawow7nqVjcboLqKfh_d2xOci7lD9j-H5aaCwJd0LaH8baUGRgfrWfmKYlvDTg%3D%3D"
          className="btn btn-custom"
          target="_blank"  rel="noopener noreferrer"
        >
          Order from <br></br>SOMA 
          </a>
      </div>

      {/* Grubhub */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Grubhub</p>
        <a
          href="https://www.grubhub.com/restaurant/wabi-sabi-sf-246-ritch-st-san-francisco/3142578?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AAiGsoaW1jkFBb2QLdTnHdhAFfCmthCX8DJjc7inlu3BaesjcFT9k8edYa6MaUXIT89VBv2GyMV38c1nMvDg6oQr3mDFUfiQ5w%3D%3D"
          className="btn btn-custom"
          target="_blank"  rel="noopener noreferrer"
        >
          Order from <br></br>SOMA 
          </a>
      </div>

      {/* Uber Eats */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Uber Eats</p>
        <a
          href="https://www.ubereats.com/store/wabi-sabi-sf-at-soma/jzSUgK2WTw-ZmsHxt24Ckw?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"
          className="btn btn-custom"
          target="_blank"  rel="noopener noreferrer"
          
        >
          Order from <br></br>SOMA 
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

    <p className="text-muted">MON: 5pm – 11pm</p>
    <p className="text-muted">TUE: CLOSED</p>
    <p className="text-muted">WED-THU: 11am – 3pm, 5 - 11pm</p>
    <p className="text-muted">FRI: 11am – 3pm, 5 - 12am</p>
    <p className="text-muted">SAT: 12pm – 4pm, 5 - 12am</p>
    <p className="text-muted">SUN: 12pm – 4pm, 5 - 11pm</p>
    <p className="text-secondary my-4">
      <a href="tel:4158109793">(415) 810-9793</a>
    </p>
    <p className="text-secondary my-4">
      1517 Pine St, San Francisco, CA 94109
    </p>

    {/* Delivery Options Container */}
    <div className="d-flex justify-content-center align-items-start gap-4 flex-wrap">
      {/* Pick Up */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Pick Up</p>
        <a
          href="https://order.toasttab.com/online/wabi-sabi-sf-nro-1517-pine-street"
          className="btn btn-custom"
          target="_blank"  rel="noopener noreferrer"
        >
          Order from <br></br>Nob Hill 
        </a>
      </div>

      {/* DoorDash */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">DoorDash</p>
        <a
          href="https://www.doordash.com/store/wabi-sabi-sf-san-francisco-27723425/32076750/?rwg_token=AAiGsoawybQJaaV5P30RDQHuqaWy3RpcUil09mN1kYy-NziKf-TLvOv_nLOryjbRw9AGqmvOydcCkNkguol71ze8i-HQWKTJsw==&utm_campaign=gpa"
          className="btn btn-custom"
          target="_blank"  rel="noopener noreferrer"

        >
          Order from <br></br>Nob Hill 
          </a>
      </div>

      {/* Grubhub */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Grubhub</p>
        <a
          href="https://www.grubhub.com/restaurant/wabi-sabi-sf-at-nob-hill-1517-pine-street-san-francisco/7728024?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AAiGsoZc3OzjIfxqQdIKagNg5AP0mZQxmtIJ1rohOM1L_s-GNqHl9kbETIuJndWHVyQucARRB8Da9wZbjE-tO58gSV7QLXk__Q%3D%3D"
          className="btn btn-custom"
          target="_blank"  rel="noopener noreferrer"

        >
          Order from <br></br>Nob Hill 
          </a>
      </div>

      {/* Uber Eats */}
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="lead">Uber Eats</p>
        <a
          href="https://www.ubereats.com/store/wabi-sabi-sf-at-nob-hill/hESjcZ4dU6qCbX2asMGixg?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global"
          className="btn btn-custom"
          target="_blank"  rel="noopener noreferrer"

        >
          Order from <br></br>Nob Hill 
          </a>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="text-center py-6 bg-black text-sm text-gray-500">
      © {new Date().getFullYear()} Wabi Sabi. All rights reserved.
      </footer>
      <AccessibilityToggle />

    </div>
  );
}

export default App;
