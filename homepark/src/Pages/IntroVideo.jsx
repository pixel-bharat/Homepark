import React from "react";
import Navbar from "../components/Navbar";
import FooterBarSection from "../components/FooterBar";
import Footer from "../components/Footer";

const IntroVideo = () => {
  return (
    <div>
      <Navbar />
      <div
        className="page-header"
        data-background="images/slide01.jpg"
        data-stellar-background-ratio="1.15"
      >
        <div className="container">
          <h1>Intro Video</h1>
          <p>
            The smaller male cones release pollen, which fertilizes the female
          </p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Start</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Intro Video
            </li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end page-header --> */}
      <div className="intro-video">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <b>01</b>
              <h4>
                <span>Homepark</span> Video
              </h4>
              <h3>Decorated Flats in Pozniaky - Kiev</h3>
              <div className="video-container">
                <video src="videos/video01.mp4" controls muted></video>
              </div>
              {/* <!-- end video-container --> */}
            </div>
            {/* <!-- end col-8 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end intro-video --> */}
      <div className="footer-bar">
        <div className="container">
          <div className="inner wow fadeIn">
            <div className="row">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.05s">
                <figure>
                  <img src="images/footer-icon01.png" alt="Image" />
                </figure>
                <h3>Address Infos</h3>
                <p>
                  Kyiv | G. Stalingrada Avenue, 6 <br />
                  Vilnius | Antakalnio St. 17
                </p>
              </div>
              {/* <!-- end col-4 --> */}
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.10s">
                <figure>
                  <img src="images/footer-icon02.png" alt="Image" />
                </figure>
                <h3>Working Hours</h3>
                <p>
                  Monday to Friday <strong>09:00</strong> to{" "}
                  <strong>18:30</strong> <br />
                  Saturday we work until <strong>15:30</strong>
                </p>
              </div>
              {/* <!-- end col-4 --> */}
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.15s">
                <figure>
                  <img src="images/footer-icon03.png" alt="Image" />
                </figure>
                <h3>Sales Office</h3>
                <p>
                  Boryssa Himry 124 B Block Pozniaky
                  <br />
                  Kiev Oblast - Ukraine
                </p>
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
      <FooterBarSection />

      <Footer />
    </div>
  );
};

export default IntroVideo;
