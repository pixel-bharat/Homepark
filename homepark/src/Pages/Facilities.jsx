import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FooterBarSection from '../components/FooterBar';



// If using Swiper modules (like Pagination, Navigation), you should import them explicitly

const Facilities = () => {
  return (
    <div>
      <Navbar/>
      {/* Header Section */}
      <div className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>Facilities</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Start</a></li>
            <li className="breadcrumb-item active" aria-current="page">Facilities</li>
          </ol>
        </div>
        {/* end container */}
      </div>
      {/* end page-header */}

      {/* Facilities Section */}
      <div className="facilities">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon01.png" alt="Image" />
                <figcaption>
                  <h5>Flexible Transportation</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon02.png" alt="Image" />
                <figcaption>
                  <h5>Friendly Living Spaces</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon03.png" alt="Image" />
                <figcaption>
                  <h5>Maximum Life of Quality</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon07.png" alt="Image" />
                <figcaption>
                  <h5>Recycling Solar Energy</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon05.png" alt="Image" />
                <figcaption>
                  <h5>Amazing Flat Structure</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon06.png" alt="Image" />
                <figcaption>
                  <h5>Unique Playground Area</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon08.png" alt="Image" />
                <figcaption>
                  <h5>Flexible Transportation</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon09.png" alt="Image" />
                <figcaption>
                  <h5>Friendly Living Spaces</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure>
                <img src="images/services-icon10.png" alt="Image" />
                <figcaption>
                  <h5>Maximum Life of Quality</h5>
                  <p>The smaller male cones release pollen, which fertilizes the female</p>
                </figcaption>
              </figure>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end facilities */}
<FooterBarSection/>
      <Footer />
    </div>
  );
};

export default Facilities;
