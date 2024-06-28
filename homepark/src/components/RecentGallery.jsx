// RecentGallerySection.jsx
import React from 'react';

const RecentGallerySection = () => {
  return (
    <section className="recent-gallery">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 wow fadeInUp">
            <b>03</b>
            <h4><span>Property</span> Inner Gallery</h4>
            <h3>Lux Living Spaces in Pozniaky - Kiev</h3>
            <a href="#" className="link">SEE ALL GALLERY <i className="fas fa-caret-right"></i></a>
          </div>
          {/* <!-- end col-5 --> */}
          <div className="col-lg-7">
            <div className="row inner">
              <div className="col-md-4 wow fadeInUp" data-wow-delay="0s">
                <figure data-stellar-ratio="1.07">
                  <a href="images/gallery-thumb01.jpg" data-fancybox>
                    <img src="images/gallery-thumb01.jpg" alt="Image" />
                  </a>
                </figure>
              </div>
              {/* <!-- end col-4 --> */}
              <div className="col-md-4 wow fadeInUp" data-wow-delay="0.05s">
                <figure data-stellar-ratio="1.15">
                  <a href="images/gallery-thumb02.jpg" data-fancybox>
                    <img src="images/gallery-thumb02.jpg" alt="Image" />
                  </a>
                </figure>
              </div>
              {/* <!-- end col-4 --> */}
              <div className="col-md-4 wow fadeInUp" data-wow-delay="0.10s">
                <figure data-stellar-ratio="1.04">
                  <a href="images/gallery-thumb03.jpg" data-fancybox>
                    <img src="images/gallery-thumb03.jpg" alt="Image" />
                  </a>
                </figure>
              </div>
              {/* <!-- end col-4 --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end col-7 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end recent-gallery -->
  );
};

export default RecentGallerySection;
