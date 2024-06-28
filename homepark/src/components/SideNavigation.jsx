import React from 'react';

const SideNavigation = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`sidenav ${isOpen ? 'active' : ''}`}>
      <div className="side-navigation">
        <div className="menu">
          <ul>
            <li><a href="index.html">START</a></li>
            <li>
              <a href="#">HOMEPARK</a>
              <ul>
                <li><a href="zaga-construction.html">Zaga Construction</a></li>
                <li><a href="about-homepark.html">About Homepark</a></li>
                <li><a href="homepark-blocks.html">Homepark Blocks</a></li>
              </ul>
            </li>
            <li>
              <a href="#">PAGES</a>
              <ul>
                <li><a href="sales-offices.html">Sales Offices</a></li>
                <li><a href="press-relases.html">Press Releases</a></li>
                <li><a href="photo-gallery.html">Photo Gallery</a></li>
                <li><a href="intro-video.html">Intro Video</a></li>
                <li><a href="certificates.html">Certificates</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="sales.html">Sales Team</a></li>
                <li><a href="404.html">404 Error</a></li>
              </ul>
            </li>
            <li>
              <a href="#">APARTMENTS</a>
              <ul>
                <li><a href="apartment-one-room.html">1 Room 47m²</a></li>
                <li><a href="apartment-two-rooms.html">2 Rooms 65m²</a></li>
                <li><a href="apartment-three-rooms.html">3 Rooms 90m²</a></li>
              </ul>
            </li>
            <li><a href="facilities.html">FACILITIES</a></li>
            <li><a href="news.html">NEWS</a></li>
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
        </div>
        {/* end menu */}
        <div className="side-content">
          <figure><img src="images/logo-light.png" alt="Image" /></figure>
          <p>By aiming to take the life quality to an upper level with the whole realized Projects, Homepark continues to be the address of luxury.</p>
          <ul className="gallery">
            <li><a href="images/gallery-thumb01.jpg" data-fancybox><img src="images/gallery-thumb01.jpg" alt="Image" /></a></li>
            <li><a href="images/gallery-thumb02.jpg" data-fancybox><img src="images/gallery-thumb02.jpg" alt="Image" /></a></li>
            <li><a href="images/gallery-thumb03.jpg" data-fancybox><img src="images/gallery-thumb03.jpg" alt="Image" /></a></li>
          </ul>
          <address>
            Kyiv | G. Stalingrada Avenue, 6 <br />
            Vilnius | Antakalnio St. 17
          </address>
          <h6>+380(98)298-59-73</h6>
          <p><a href="mailto:hello@homepark.com.ua">hello@homepark.com.ua</a></p>
          <ul className="social-media">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
          <small>© 2019 Homepark | Real Estate & Luxury Homes</small>
        </div>
        {/* end side-content */}
      </div>
    </div>
  );
};

export default SideNavigation;
