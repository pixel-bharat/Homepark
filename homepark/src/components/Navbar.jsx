import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNavigation from './SideNavigation'; // Adjust the import path based on your project structure

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="upper-side">
          <div className="logo">
            <Link to="/"><img src="images/logo-light.png" alt="Home" /></Link>
          </div>
          <div className="phone-email">
            <img src="images/icon-phone.png" alt="Phone" />
            <h4>+380(98)298-59-73</h4>
            <small><a href="mailto:hello@homepark.com.ua">hello@homepark.com.ua</a></small>
          </div>
          <div className="language">
            <a href="#">EN</a>
            <a href="#">UA</a>
          </div>
          <div className="hamburger" onClick={toggleSideNav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/">START</Link></li>
            <li>
              <a href="#">HOMEPARK</a>
              <ul>
              <li><Link to="/zagaconstruction">Zaga Construction </Link></li>
                <li><Link to="/abouthomepark">About Homepark</Link></li>
                <li><Link to="/homeparkblock">Homepark Blocks</Link></li>
              </ul>
            </li>
            <li>
              <a href="#">PAGES</a>
              <ul>
              <li><Link to="/salesoffices">Sales Offices</Link></li>
                <li><Link to="/pressrelases">Press Releases</Link></li>
                <li><Link to="/photogallery">Photo Gallery</Link></li>
                <li><Link to="/introvideo">Intro Video</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/salesteam">Sales Team</Link></li>
                <li><a href="/notfound">404 Error</a></li>
              </ul>
            </li>
            <li>
              <a href="#">APARTMENTS</a>
              <ul>
                <li><Link to="/apartmentoneroom">1 Room 47m²</Link></li>
                <li><Link to="/apartmenttworooms">2 Rooms 65m²</Link></li>
                <li><Link to="/apartmentthreerooms">3 Rooms 90m²</Link></li>
              </ul>

            </li>



            <li><Link to="/facilities">FACILITIES</Link></li>
            <li><Link to="/news">NEWS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
      </div>
      {showSideNav && <SideNavigation isOpen={showSideNav} toggleMenu={toggleSideNav} />}
    </nav>
  );
};

export default Navbar;
