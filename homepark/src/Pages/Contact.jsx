import React from 'react';
import Navbar from '../components/Navbar';
import FooterBarSection from '../components/FooterBar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>Contact</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Start</a></li>
            <li className="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end page-header --> */}
      <div className="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInUp">
              <b>07</b>
              <h4><span>Homepark</span> Living Spaces</h4>
              <small>Smaller male cones</small>
            </div>
            {/* <!-- end col-6 --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp">
              <address>
                <strong>Visit Us</strong>
                <p>Kristiatik 15th Street, Floot 17<br />Kiev, Ukraine 78692</p>
              </address>
            </div>
            {/* <!-- end col-3 --> */}
            <div className="col-lg-3 col-md-6 wow fadeInUp">
              <address>
                <strong>Say Hello</strong>
                <p><a href="mailto:hello@homepark.com.ua">hello@homepark.com.ua</a><br />+380(98)298-59-73</p>
              </address>
            </div>
            {/* <!-- end col-3 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="map">
                <div className="pattern-bg" data-stellar-ratio="1.03"></div>
                {/* <!-- end pattern-bg --> */}
                <div className="holder" data-stellar-ratio="1.07">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2378765886474!2d-73.97644805915624!3d40.69075842971381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bb6c6fe52c7%3A0x2b3bb16e97b13c01!2sFort+Greene+Tennis+Courts!5e0!3m2!1sen!2str!4v1559831164025!5m2!1sen!2str"
                    allowFullScreen
                    title="Google Maps"
                  ></iframe>
                </div>
                {/* <!-- end holder --> */}
              </div>
              {/* <!-- end map --> */}
            </div>
            {/* <!-- end col-6 --> */}
            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contact" name="contact" method="post">
                  <div className="form-group">
                    <input type="text" name="name" id="name" autoComplete="off" required />
                    <span>Your name</span>
                  </div>
                  {/* <!-- end form-group --> */}
                  <div className="form-group">
                    <input type="email" name="email" id="email" autoComplete="off" required />
                    <span>Your e-mail</span>
                  </div>
                  {/* <!-- end form-group --> */}
                  <div className="form-group">
                    <input type="text" name="subject" id="subject" autoComplete="off" required />
                    <span>Subject</span>
                  </div>
                  {/* <!-- end form-group --> */}
                  <div className="form-group">
                    <textarea name="message" id="message" autoComplete="off" required></textarea>
                    <span>Your message</span>
                  </div>
                  {/* <!-- end form-group --> */}
                  <div className="form-group">
                    <button id="submit" type="submit" name="submit">
                      Submit
                    </button>
                  </div>
                  {/* <!-- end form-group --> */}
                </form>
                {/* <!-- end form --> */}
                <div className="form-group">
                  <div id="success" className="alert alert-success wow fadeInUp" role="alert">
                    Your message was sent successfully! We will be in touch as soon as we can.
                  </div>
                  {/* <!-- end success --> */}
                  <div id="error" className="alert alert-danger wow fadeInUp" role="alert">
                    Something went wrong, try refreshing and submitting the form again.
                  </div>
                  {/* <!-- end error --> */}
                </div>
                {/* <!-- end form-group --> */}
              </div>
              {/* <!-- end contact-form --> */}
            </div>
            {/* <!-- end col-6 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end contact --> */}
      <div className="footer-bar">
        <div className="container">
          <div className="inner wow fadeIn">
            <div className="row">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.05s">
                <figure><img src="images/footer-icon01.png" alt="Address Icon" /></figure>
                <h3>Address Infos</h3>
                <p>
                  Kyiv | G. Stalingrada Avenue, 6
                  <br />
                  Vilnius | Antakalnio St. 17
                </p>
              </div>
              {/* <!-- end col-4 --> */}
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.10s">
                <figure><img src="images/footer-icon02.png" alt="Clock Icon" /></figure>
                <h3>Working Hours</h3>
                <p>
                  Monday to Friday <strong>09:00</strong> to <strong>18:30</strong>
                  <br />
                  Saturday we work until <strong>15:30</strong>
                </p>
              </div>
              {/* <!-- end col-4 --> */}
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.15s">
                <figure><img src="images/footer-icon03.png" alt="Sales Icon" /></figure>
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
      <FooterBarSection/>
      <Footer/>
    </div>
  );
};

export default Contact;
