// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.05s">
            <img src="images/logo-light.png" alt="Image" className="logo" />
            <p>By aiming to take the life quality to an upper level with the whole realized Projects, Homepark continues to be the address of luxury.</p>
            <div className="select-box dropdown show">
              <a className="dropdown-toggle" href="#" role="button" id="language-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span><img src="images/flag-tr.svg" alt="Image" /> Turkish</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="language-select">
                <li><a className="dropdown-item" href="#"><img src="images/flag-en.svg" alt="Image" /> English</a></li>
                <li><a className="dropdown-item" href="#"><img src="images/flag-ua.svg" alt="Image" /> Russian</a></li>
                <li><a className="dropdown-item" href="#"><img src="images/flag-br.svg" alt="Image" /> Portugues</a></li>
              </ul>
            </div>
            {/* <!-- end select-box --> */}
          </div>
          {/* <!-- end col-4 --> */}
          <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.10s">
            <ul className="footer-menu">
              <li><a href="#">Homepark</a></li>
              <li><a href="#">Apartments</a></li>
              <li><a href="#">Facilities</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.15s">
            <ul className="footer-menu">
              <li><a href="#">Suites</a></li>
              <li><a href="#">Apartments</a></li>
              <li><a href="#">Villas & Houses</a></li>
              <li><a href="#">Butique Room</a></li>
              <li><a href="#">Buildings</a></li>
            </ul>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.20s">
            <div className="contact-box">
              <h5>CALL CENTER</h5>
              <h3>+380(98)298-59-73</h3>
              <p><a href="mailto:hello@homepark.com.ua">hello@homepark.com.ua</a></p>
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
            {/* <!-- end contact-box --> */}
          </div>
          {/* <!-- end col-4 --> */}
          <div className="col-12">
            <span className="copyright">© 2019 Homepark | Real Estate &amp; Luxury Homes</span>
            <span className="creation">Site created by <a href="#">Themezinho</a></span>
          </div>
          {/* <!-- end col-12 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </footer>
    // <!-- end footer -->
  );
};

export default Footer;
