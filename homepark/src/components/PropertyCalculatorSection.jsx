// PropertyCalculatorSection.jsx
import React from 'react';

const PropertyCalculatorSection = () => {
  return (
    <section className="property-calculator">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <figure>
              <div className="pattern-bg" data-stellar-ratio="1.03"></div>
              {/* <!-- end pattern-bg --> */}
              <div className="holder" data-stellar-ratio="1.07">
                <img src="images/side-image02.jpg" alt="Image" />
              </div>
              {/* <!-- end holder --> */}
            </figure>
          </div>
          {/* <!-- end col-6 --> */}
          <div className="col-lg-6 wow fadeInUp">
            <div className="content-box">
              <b>04</b>
              <h4><span>Homepark</span> Living Spaces</h4>
              <h3>Decorated Flats in Pozniaky - Kiev</h3>
              <p>The smaller male cones release pollen, which fertilizes the female.</p>
              <ul>
                <li><img src="images/bank-logos01.jpg" alt="Image" /></li>
                <li><img src="images/bank-logos02.jpg" alt="Image" /></li>
              </ul>
              <a href="#">
                <img src="images/icon-calculator.png" alt="Image" />
                Living Space Calculator
              </a>
            </div>
            {/* <!-- end content-box --> */}
          </div>
          {/* <!-- end col-6 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end property-calculator -->
  );
};

export default PropertyCalculatorSection;
