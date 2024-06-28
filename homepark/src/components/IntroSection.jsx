// IntroSection.jsx
import React from 'react';

const IntroSection = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <figure>
              <div className="pattern-bg" data-stellar-ratio="1.07"></div>
              {/* <!-- end pattern-bg --> */}
              <div className="holder" data-stellar-ratio="1.10"> 
                <img src="images/side-image01.jpg" alt="Image" />
              </div>
              {/* <!-- end holder --> */}
            </figure>
          </div>
          {/* <!-- end col-6 --> */}
          <div className="col-lg-6 wow fadeInUp">
            <div className="content-box"> 
              <b>01</b>
              <h4><span>Pozniaky</span> Construction LLC</h4>
              <h3>Living spaces for creative peoples</h3>
              <p>The smaller male cones release pollen, which fertilizes the female</p>
              <a href="#"> 
                <img src="images/icon-m2.png" alt="Image" />
                See our projects
              </a>
            </div>
            {/* <!-- end content-box --> */}
          </div>
          {/* <!-- edn col-6 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end intro -->
  );
};

export default IntroSection;
