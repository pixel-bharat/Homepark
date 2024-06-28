// GetConsultationSection.jsx
import React from 'react';

const GetConsultationSection = () => {
  return (
    <section className="get-consultation" style={{ backgroundImage: 'url(images/section-bg01.jpg)' }} data-stellar-background-ratio="0.9">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 fadeInUp wow">
            <div className="content-box"> 
              <b>06</b>
              <h4><span>Homepark</span> Living Spaces</h4>
              <h3>Are you interested in Homepark?</h3>
              <p>The sun collectors shall provide the electricity for the social areas of the site and contribute to protecting the environment.</p>
              <a href="#">SCHEDULE A VISIT <i className="fas fa-caret-right"></i></a> 
            </div>
            {/* <!-- end content-box --> */}
          </div>
          {/* <!-- end col-6 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end get-consultation -->
  );
};

export default GetConsultationSection;
