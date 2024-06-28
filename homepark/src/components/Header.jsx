// Header.jsx
import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination, Navigation]);

const Header = () => {
  return (
    <header className="slider">
      <div className="slider-container">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          className="swiper-container"
        >
          <SwiperSlide
            style={{ backgroundImage: 'url(images/slide01.jpg)' }}
            data-stellar-background-ratio="1.15"
          >
            <div className="container">
              <h1><span>Udført</span> Luxury Residences</h1>
              <h2>Living Spaces in Pecherska - Kiev</h2>
              <a href="#">GET A CONSULTATION <i className="fas fa-caret-right"></i></a>
              <figure><img src="images/services-icon01.png" alt="Image" /></figure>
            </div>
            {/* <!-- end container --> */}
          </SwiperSlide>
          {/* <!-- end swiper-slide --> */}
          <SwiperSlide
            style={{ backgroundImage: 'url(images/slide02.jpg)' }}
            data-stellar-background-ratio="1.15"
          >
            <div className="container">
              <h1><span>Oxøme</span> Premium Flats</h1>
              <h2>Provide a decent level of comfort </h2>
              <a href="#">GET A CONSULTATION <i className="fas fa-caret-right"></i></a>
              <figure><img src="images/services-icon08.png" alt="Image" /></figure>
            </div>
            {/* <!-- end container --> */}
          </SwiperSlide>
          {/* <!-- end swiper-slide --> */}
          <SwiperSlide
            style={{ backgroundImage: 'url(images/slide03.jpg)' }}
            data-stellar-background-ratio="1.15"
          >
            <div className="container">
              <h1><span>Hømepark</span> Elite Residences</h1>
              <h2>We build your dream house</h2>
              <a href="#">GET A CONSULTATION <i className="fas fa-caret-right"></i></a>
              <figure><img src="images/services-icon07.png" alt="Image" /></figure>
            </div>
            {/* <!-- end container --> */}
          </SwiperSlide>
          {/* <!-- end swiper-slide --> */}
        </Swiper>
        {/* <!-- end swiper-container --> */}
        <div className="inner-elements">
          <div className="container">
            <div className="pagination"></div>
            {/* <!-- end pagination --> */}
            <div className="button-prev">PREV</div>
            {/* <!-- end button-prev --> */}
            <div className="button-next">NEXT</div>
            {/* <!-- end button-next --> */}
            <div className="social-media">
              <h6>SOCIAL MEDIA</h6>
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-google"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
            {/* <!-- end social-media --> */}
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end inner-elements --> */}
      </div>
      {/* <!-- end slider-container --> */}
    </header>
    // <!-- end slider -->
  );
};

export default Header;
