import React from 'react';
import Navbar from '../components/Navbar';
import FooterBarSection from '../components/FooterBar';
import Footer from '../components/Footer';

const Certificates = () => {
  return (
    <div>
        <Navbar/>
      <div className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>Certificates</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Start</a></li>
            <li className="breadcrumb-item active" aria-current="page">Certificates</li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end page-header --> */}
      <div className="certificates">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12 wow fadeInUp">
              <b>01</b>
              <h4><span>Property</span> Certificates</h4>
              <small>Smaller male cones</small>
            </div>
            {/* <!-- end col-5 --> */}
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.05s">
              <figure>
                <a href="images/certificate01.jpg" data-fancybox><img src="images/certificate01.jpg" alt="Image" /></a>
              </figure>
            </div>
            {/* <!-- end col-3 --> */}
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.10s">
              <figure>
                <a href="images/certificate02.jpg" data-fancybox><img src="images/certificate02.jpg" alt="Image" /></a>
              </figure>
            </div>
            {/* <!-- end col-3 --> */}
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.15s">
              <figure>
                <a href="images/certificate03.jpg" data-fancybox><img src="images/certificate03.jpg" alt="Image" /></a>
              </figure>
            </div>
            {/* <!-- end col-3 --> */}
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.20s">
              <figure>
                <a href="images/certificate04.jpg" data-fancybox><img src="images/certificate04.jpg" alt="Image" /></a>
              </figure>
            </div>
            {/* <!-- end col-3 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end certificates --> */}
      <div className="footer-bar">
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
      </div>
      {/* <!-- end footer-bar --> */}
      <FooterBarSection/>
      <Footer/>
    </div>
  );
};

export default Certificates;
