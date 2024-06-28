import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FooterBarSection from '../components/FooterBar';

const PressReleases = () => {

  const releases = [
    {
      title: 'NEW YORK TIMES',
      description: 'How to lead company simply due to confusion',
      date: '26 November 2018',
      image: 'images/gallery-thumb01.jpg'
    },
    {
      title: 'REAL MAGAZINE',
      description: 'How to lead company simply due to confusion',
      date: '26 November 2018',
      image: 'images/gallery-thumb02.jpg'
    },
    {
      title: 'US REALTOR',
      description: 'How to lead company simply due to confusion',
      date: '26 November 2018',
      image: 'images/gallery-thumb03.jpg'
    },
    {
      title: 'APART MAG',
      description: 'How to lead company simply due to confusion',
      date: '26 November 2018',
      image: 'images/gallery-thumb04.jpg'
    },
    {
      title: 'FLAT NEWS',
      description: 'How to lead company simply due to confusion',
      date: '26 November 2018',
      image: 'images/gallery-thumb05.jpg'
    },
    {
      title: 'CDN NEWS',
      description: 'How to lead company simply due to confusion',
      date: '26 November 2018',
      image: 'images/gallery-thumb06.jpg'
    }
  ];

  return (
    <div>
            <Navbar/>
      <div className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>Press Releases</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Start</a></li>
            <li className="breadcrumb-item active" aria-current="page">Press Releases</li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end page-header --> */}
      <div className="press-releases">
        <div className="container">
          <div className="row">
            {releases.map((release, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0s" key={index}>
                <figure data-stellar-ratio="1.07">
                  <a href={release.image} data-fancybox>
                    <img src={release.image} alt={release.title} />
                  </a>
                  <figcaption>
                    <h5>{release.title}</h5>
                    <p>{release.description}</p>
                    <small>{release.date}</small>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end press-releases --> */}
      <FooterBarSection/>
      <Footer/>
    </div>
  );
};

export default PressReleases;
