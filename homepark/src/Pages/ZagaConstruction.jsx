import React from "react";

import Navbar from "../components/Navbar";
import FooterBarSection from "../components/FooterBar";
import Footer from "../components/Footer";

const ZagaConstruction = () => {
  return (
    <div>
      <Navbar />
      <header
        className="page-header"
        data-background="images/slide01.jpg"
        data-stellar-background-ratio="1.15"
      >
        <div className="container">
          <h1>Zaga Construction</h1>
          <p>
            The smaller male cones release pollen, which fertilizes the female
          </p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Start</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Homepark</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Zaga Construction
            </li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </header>
      {/* <!-- end page-header --> */}
      <section className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                <span>Zaga</span> Construction
              </h2>
              <h5>
                By aiming to take the life quality to an upper level with the
                whole realized Projects of luxury.
              </h5>
            </div>
            {/* <!-- end col-12 --> */}
            <div className="col-lg-7">
              <p>
                Apartments simplicity or understood do it we. Song such eyes had
                and off. Removed winding ask explain delight out few behaved
                lasting. Letters old hastily ham sending not sex chamber because
                present. Oh is indeed twenty entire figure. Occasional
                diminution announcing new now literature terminated.{" "}
              </p>
            </div>
            {/* <!-- en col-7 --> */}
            <div className="col-lg-5">
              <p>
                Really regard excuse off ten pulled. Lady am room head so lady
                four or eyes an. He do of consulted sometimes concluded mr. An
                household behaviour if pretended.{" "}
              </p>
            </div>
            {/* <!-- end col-5 --> */}

            <div className="col-12">
              <div className="gallery-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="images/blog01.jpg" alt="Image" />
                  </div>
                  <div className="swiper-slide">
                    <img src="images/blog02.jpg" alt="Image" />
                  </div>
                  <div className="swiper-slide">
                    <img src="images/blog03.jpg" alt="Image" />
                  </div>
                  <div className="swiper-slide">
                    <img src="images/blog04.jpg" alt="Image" />
                  </div>
                </div>
                {/* <!-- add swiper-wrapper --> */}
                <div className="gallery-pagination"></div>
                {/* <!-- end gallery-pagination --> */}
              </div>
              {/* <!-- end gallery-container --> */}
              <h4>Take the life quality to an upper level</h4>
              <p>
                Lady am room head so lady four or eyes an. He do of consulted
                sometimes concluded mr. An household behaviour if
                pretended.Apartments simplicity or <strong>understood</strong>{" "}
                do it we. Song such eyes had and off. Removed winding ask
                explain delight out few behaved lasting. Letters old hastily ham
                sending not sex chamber because present. Oh is indeed twenty
                entire figure. Occasional diminution announcing new now
                literature terminated.{" "}
              </p>
              <br />
            </div>
            {/* <!-- end col-12 --> */}
            <div className="col-md-6">
              <h6>Property Specifications</h6>
              <ul>
                <li>Reget nec nunc. Etiam posuere iaculis quam.</li>
                <li>
                  Faucibus viverra eget nec nunc. Etiam posuere iaculis quam.
                </li>
                <li>Etiam nec urna in odio faucibus viverra eget nec nunc. </li>
                <li>Lectus Morbi tempus, odio suscipit efficitur vestibulum</li>
                <li>
                  Ut in ante et quam malesuada gravida. Morbi tempus, odio
                  suscipit{" "}
                </li>
                <li>
                  Sed lectus vehicula mollis. Ut in ante et quam malesuada
                  gravida.
                </li>
              </ul>
            </div>
            {/* <!-- end col-6 --> */}
            <div className="col-md-6">
              <h6>Property Benefits</h6>
              <ul>
                <li>
                  Ut in ante et quam malesuada gravida. Morbi tempus, odio
                  suscipit{" "}
                </li>
                <li>
                  Sed lectus vehicula mollis. Ut in ante et quam malesuada
                  gravida.
                </li>
                <li>Reget nec nunc. Etiam posuere iaculis quam.</li>
                <li>
                  Faucibus viverra eget nec nunc. Etiam posuere iaculis quam.
                </li>
                <li>
                  Integer ac nunc sed lectus vehicula mollis in ante et gravida.
                </li>
                <li>Morbi tempus, odio suscipit efficitur vestibulum</li>
              </ul>
            </div>
            {/* <!-- end col-6 --> */}
            <div className="col-lg-9">
              <div className="video-content">
                <video src="videos/video01.mp4" controls muted></video>
              </div>
              {/* <!-- end video-content --> */}
            </div>
            {/* <!-- end col-9 --> */}
            <div className="col-12">
              <blockquote>
                <p>
                  Song such eyes had and off. Removed winding ask explain
                  delight out few behaved lasting
                </p>
                <strong>Zaga Construction Lead Engineer</strong>
              </blockquote>

              <p>
                Considered an invitation do introduced{" "}
                <u>sufficient understood</u> instrument it. Of decisively
                friendship in as collecting at. No affixed be husband ye females
                brother garrets proceed. Least child who seven happy yet balls
                young. Discovery sweetness principle discourse shameless bed one
                excellent. Sentiments of surrounded friendship dispatched
                connection is he. Me or produce besides hastily up as pleased.
                Bore less when had and john shed hope.{" "}
              </p>
              <p>
                Started earnest brother believe an exposed so. Me he believing
                daughters if forfeited at furniture. Age again and stuff downs
                spoke. Late hour new nay able fat each sell. Nor themselves age
                introduced frequently use unsatiable devonshire get. They why
                quit gay cold rose deal park. One same they four did ask busy.
                Reserved opinions fat him nay position. Breakfast as zealously
                incommode do agreeable furniture. One too nay led fanny allow
                plate.
              </p>
            </div>
            {/* <!-- en col-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end about-content --> */}
      <FooterBarSection />
      <Footer />
    </div>
  );
};

export default ZagaConstruction;
