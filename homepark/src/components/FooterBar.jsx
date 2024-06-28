// FooterBarSection.jsx
import React from 'react';

const FooterBarSection = () => {
  return (
    <section className="footer-bar">
      <div className="container">
        <div className="inner wow fadeIn">
          <div className="row">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.05s">
              <figure><img src="images/footer-icon01.png" alt="Image" /></figure>
              <h3>Address Infos</h3>
              <p>Kyiv | G. Stalingrada Avenue, 6 <br />
                Vilnius | Antakalnio St. 17</p>
            </div>
            {/* <!-- end col-4 --> */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.10s">
              <figure><img src="images/footer-icon02.png" alt="Image" /></figure>
              <h3>Working Hours</h3>
              <p>Monday to Friday <strong>09:00</strong> to <strong>18:30</strong> <br />
                Saturday we work until <strong>15:30</strong></p>
            </div>
            {/* <!-- end col-4 --> */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.15s">
              <figure><img src="images/footer-icon03.png" alt="Image" /></figure>
              <h3>Sales Office</h3>
              <p>Boryssa Himry 124 B Block Pozniaky<br />
                Kiev Oblast - Ukraine</p>
            </div>
            {/* <!-- end col-4 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end inner --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end footer-bar -->
  );
};

export default FooterBarSection;
