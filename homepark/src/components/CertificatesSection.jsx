// CertificatesSection.jsx
import React from 'react';

const CertificatesSection = () => {
  return (
    <section className="certificates">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 wow fadeInUp">
            <b>09</b>
            <h4>
              <span>Property</span> Certificates
            </h4>
            <small>Smaller male cones</small>
          </div>
          {/* <!-- end col-5 --> */}
          {/* Array of certificate images */}
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-6 col-6 wow fadeInUp" data-wow-delay={`${index * 0.05 + 0.05}s`}>
              <figure>
                <a href={`images/certificate0${index + 1}.jpg`} data-fancybox>
                  <img src={`images/certificate0${index + 1}.jpg`} alt={`Certificate ${index + 1}`} />
                </a>
              </figure>
            </div>
          ))}
          {/* <!-- end col-3 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end certificates -->
  );
};

export default CertificatesSection;
