import React from 'react';

const Slider = () => {
  return (
    <header className="slider">
      <div className="slider-container">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
            <div className="container">
              <h1><span>Udført</span> Luxury Residences</h1>
              <h2>Living Spaces in Pecherska - Kiev</h2>
              <a href="#">GET A CONSULTATION <i className="fas fa-caret-right"></i></a>
              <figure><img src="images/services-icon01.png" alt="Image" /></figure>
            </div>
            {/* end container */}
          </div>
          {/* end swiper-slide */}

          {/* Slide 2 */}
          <div className="swiper-slide" data-background="images/slide02.jpg" data-stellar-background-ratio="1.15">
            <div className="container">
              <h1><span>Oxøme</span> Premium Flats</h1>
              <h2>Provide a decent level of comfort </h2>
              <a href="#">GET A CONSULTATION <i className="fas fa-caret-right"></i></a>
              <figure><img src="images/services-icon08.png" alt="Image" /></figure>
            </div>
            {/* end container */}
          </div>
          {/* end swiper-slide */}

          {/* Slide 3 */}
          <div className="swiper-slide" data-background="images/slide03.jpg" data-stellar-background-ratio="1.15">
            <div className="container">
              <h1><span>Hømepark</span> Elite Residences</h1>
              <h2>We build your dream house</h2>
              <a href="#">GET A CONSULTATION <i className="fas fa-caret-right"></i></a>
              <figure><img src="images/services-icon07.png" alt="Image" /></figure>
            </div>
            {/* end container */}
          </div>
          {/* end swiper-slide */}
        </div>
        {/* end swiper-wrapper */}

        {/* Add Pagination and Navigation Buttons */}
        <div className="inner-elements">
          <div className="container">
            <div className="pagination"></div>
            {/* end pagination */}
            <div className="button-prev">PREV</div>
            {/* end button-prev */}
            <div className="button-next">NEXT</div>
            {/* end button-next */}
            <div className="social-media">
              <h6>SOCIAL MEDIA</h6>
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-google"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
            {/* end social-media */}
          </div>
          {/* end container */}
        </div>
        {/* end inner-elements */}
      </div>
      {/* end slider-container */}
    </header>
  );
}

export default Slider;
