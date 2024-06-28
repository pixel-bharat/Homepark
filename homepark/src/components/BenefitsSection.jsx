// BenefitsSection.jsx
import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp">
            <b>02</b>
            <h4><span>Homepark</span> Property</h4>
            <h3>Decorated Flats in Pozniaky - Kiev</h3>
          </div>
          {/* <!-- end col-12 --> */}
          <div className="col wow fadeInUp" data-wow-delay="0s">
            <figure>
              <img src="images/icon-benefits01.png" alt="Image" />
              <b></b>
            </figure>
            <h6>Near to Subway</h6>
            <span className="odometer" data-count="28" data-status="yes">0</span> <span className="extra">min</span>
          </div>
          {/* <!-- end col --> */}
          <div className="col wow fadeInUp" data-wow-delay="0.05s">
            <figure>
              <img src="images/icon-benefits02.png" alt="Image" />
              <b></b>
            </figure>
            <h6>Spaces in Pozniaky</h6>
            <span className="odometer" data-count="32" data-status="yes">0</span> <span className="extra">+</span>
          </div>
          {/* <!-- end col --> */}
          <div className="col wow fadeInUp" data-wow-delay="0.10s">
            <figure>
              <img src="images/icon-benefits03.png" alt="Image" />
              <b></b>
            </figure>
            <h6>Spaces in Pozniaky</h6>
            <span className="odometer" data-count="15" data-status="yes">0</span> <span className="extra">%</span>
          </div>
          {/* <!-- end col --> */}
          <div className="col wow fadeInUp" data-wow-delay="0.15s">
            <figure>
              <img src="images/icon-benefits04.png" alt="Image" />
              <b></b>
            </figure>
            <h6>Spaces in Pozniaky</h6>
            <span className="odometer" data-count="3" data-status="yes">0</span> <span className="extra">years</span>
          </div>
          {/* <!-- end col --> */}
          <div className="col wow fadeInUp" data-wow-delay="0.20s">
            <figure>
              <img src="images/icon-benefits05.png" alt="Image" />
              <b></b>
            </figure>
            <h6>Spaces in Pozniaky</h6>
            <span className="odometer" data-count="79" data-status="yes">0</span> <span className="extra">m²</span>
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end benefits -->
  );
};

export default BenefitsSection;
