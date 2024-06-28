// LogosSection.jsx
import React from 'react';

const LogosSection = () => {
  return (
    <section className="logos">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0s">
            <figure> 
              <img src="images/logo01.jpg" alt="Image" />
              <h6>TABLE</h6>
            </figure>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.05s">
            <figure> 
              <img src="images/logo02.jpg" alt="Image" />
              <h6>PLANE</h6>
            </figure>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.10s">
            <figure> 
              <img src="images/logo03.jpg" alt="Image" />
              <h6>CONNECT</h6>
            </figure>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.15s">
            <figure> 
              <img src="images/logo04.jpg" alt="Image" />
              <h6>GLASSES</h6>
            </figure>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.20s">
            <figure> 
              <img src="images/logo05.jpg" alt="Image" />
              <h6>PIXEL</h6>
            </figure>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.25s">
            <figure> 
              <img src="images/logo06.jpg" alt="Image" />
              <h6>ATTACH</h6>
            </figure>
          </div>
          {/* <!-- end col-2 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end logos -->
  );
};

export default LogosSection;
