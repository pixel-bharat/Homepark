import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FooterBarSection from '../components/FooterBar';

const ApartmentOneRoom = () => {
  return (
    <div>
        <Navbar/>
      <header className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>One Room</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Start</a></li>
            <li className="breadcrumb-item active" aria-current="page">One Room</li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </header>
      {/* <!-- end page-header --> */}
      <section className="apartment">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2><span>One Room</span> 47m² Homepark Flat</h2>
              <h5>By aiming to take the life quality to an upper level with the whole realized Projects of luxury.</h5>
              <div className="property-infos">
                <span className="odometer" data-count="25700" data-status="yes" data-text="$">0</span>
                <p>Price of property</p>
                <span className="odometer" data-count="47" data-status="yes" data-text="m²">0</span>
                <p>Size of apartment</p>
                <span className="odometer" data-count="23" data-status="yes" data-text="%">0</span>
                <p>Mortage credit percentage</p>
              </div>
              {/* <!-- end property-infos --> */}
              <img src="images/plan01.jpg" alt="Property Plan" className="property-plan" />
            </div>
            {/* <!-- end col-12 --> */}
            <div className="col-lg-7">
              <p>Apartments simplicity or understood do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved lasting. Letters old hastily ham sending not sex chamber because present. Oh is indeed twenty entire figure. Occasional diminution announcing new now literature terminated.</p>
            </div>
            {/* <!-- en col-7 --> */}
            <div className="col-lg-5">
              <p>Really regard excuse off ten pulled. Lady am room head so lady four or eyes an. He do of consulted sometimes concluded mr. An household behaviour if pretended.</p>
            </div>
            {/* <!-- end col-5 --> */}
            <div className="col-md-4">
              <figure><img src="images/blog01.jpg" alt="Image" /></figure>
            </div>
            {/* <!-- end col-4 --> */}
            <div className="col-md-4">
              <figure><img src="images/blog02.jpg" alt="Image" /></figure>
            </div>
            {/* <!-- end col-4 --> */}
            <div className="col-md-4">
              <figure><img src="images/blog03.jpg" alt="Image" /></figure>
            </div>
            {/* <!-- end col-4 --> */}
            <div className="col-12">
              <h4>Take the life quality to an upper level</h4>
              <p>Lady am room head so lady four or eyes an. He do of consulted sometimes concluded mr. An household behaviour if pretended. Apartments simplicity or <strong>understood</strong> do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved lasting. Letters old hastily ham sending not sex chamber because present. Oh is indeed twenty entire figure. Occasional diminution announcing new now literature terminated.</p><br />
              <h6>Property Specifications</h6>
              <ul>
                <li>Reget nec nunc. Etiam posuere iaculis quam.</li>
                <li>Faucibus viverra eget nec nunc. Etiam posuere iaculis quam.</li>
                <li>Etiam nec urna in odio faucibus viverra eget nec nunc. </li>
                <li>Lectus Morbi tempus, odio suscipit efficitur vestibulum</li>
                <li>Ut in ante et quam malesuada gravida. Morbi tempus, odio suscipit </li>
                <li>Sed lectus vehicula mollis. Ut in ante et quam malesuada gravida.</li>
                <li>Reget nec nunc. Etiam posuere iaculis quam.</li>
                <li>Faucibus viverra eget nec nunc. Etiam posuere iaculis quam.</li>
                <li>Integer ac nunc sed lectus vehicula mollis in ante et gravida.</li>
                <li>Morbi tempus, odio suscipit efficitur vestibulum</li>
              </ul>
              <blockquote>
                <p>Song such eyes had and off. Removed winding ask explain delight out few behaved lasting</p>
                <strong>Zaga Construction Lead Engineer</strong>
              </blockquote>
              <div className="gallery-slider">
                <div className="gallery-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="images/blog01.jpg" alt="Image" /></div>
                    <div className="swiper-slide"><img src="images/blog02.jpg" alt="Image" /></div>
                    <div className="swiper-slide"><img src="images/blog03.jpg" alt="Image" /></div>
                    <div className="swiper-slide"><img src="images/blog04.jpg" alt="Image" /></div>
                  </div>
                  {/* <!-- add swiper-wrapper --> */}
                  <div className="gallery-pagination"></div>
                  {/* <!-- end gallery-pagination --> */}
                </div>
                {/* <!-- end gallery-container --> */}
              </div>
              {/* <!-- end gallery-slider --> */}
              <p>Considered an invitation do introduced <u>sufficient understood</u> instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls young. Discovery sweetness principle discourse shameless bed one excellent. Sentiments of surrounded friendship dispatched connection is he. Me or produce besides hastily up as pleased. Bore less when had and john shed hope.</p>
              <p>Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.</p>
            </div>
            {/* <!-- en col-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end apartment --> */}
      <section className="footer-bar">
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
      </section>
      {/* <!-- end footer-bar --> */}
      <FooterBarSection/>
      <Footer/>

    </div>
  );
};

export default ApartmentOneRoom;
