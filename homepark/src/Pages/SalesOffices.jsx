import React from 'react';
import Navbar from '../components/Navbar';
import FooterBarSection from '../components/FooterBar';
import Footer from '../components/Footer';

const SalesOffices = () => {
  const offices = [
    { name: 'Kiev - Perherska Office', address: 'Kyiv | G. Stalingrada Avenue, 6 <br> Vilnius | Antakalnio St. 17', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.8176821244772!2d-73.98686631601882!3d40.75685630451255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854e6657b87%3A0xed0e40a6b9508db5!2sHard+Rock+Cafe!5e0!3m2!1sen!2sua!4v1530700415164' },
    { name: 'Kiev - Pozniaky Office', address: 'Kyiv | G. Stalingrada Avenue, 6 <br> Vilnius | Antakalnio St. 17', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.8176821244772!2d-73.98686631601882!3d40.75685630451255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854e6657b87%3A0xed0e40a6b9508db5!2sHard+Rock+Cafe!5e0!3m2!1sen!2sua!4v1530700415164' },
    { name: 'Kiev - Kristiatik Office', address: 'Kyiv | G. Stalingrada Avenue, 6 <br> Vilnius | Antakalnio St. 17', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.8176821244772!2d-73.98686631601882!3d40.75685630451255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854e6657b87%3A0xed0e40a6b9508db5!2sHard+Rock+Cafe!5e0!3m2!1sen!2sua!4v1530700415164' },
    { name: 'Kiev - Nivky Office', address: 'Kyiv | G. Stalingrada Avenue, 6 <br> Vilnius | Antakalnio St. 17', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.8176821244772!2d-73.98686631601882!3d40.75685630451255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854e6657b87%3A0xed0e40a6b9508db5!2sHard+Rock+Cafe!5e0!3m2!1sen!2sua!4v1530700415164' },
    { name: 'Kiev - Abolon Office', address: 'Kyiv | G. Stalingrada Avenue, 6 <br> Vilnius | Antakalnio St. 17', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.8176821244772!2d-73.98686631601882!3d40.75685630451255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854e6657b87%3A0xed0e40a6b9508db5!2sHard+Rock+Cafe!5e0!3m2!1sen!2sua!4v1530700415164' },
    { name: 'Kiev - Osasco Office', address: 'Kyiv | G. Stalingrada Avenue, 6 <br> Vilnius | Antakalnio St. 17', mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.8176821244772!2d-73.98686631601882!3d40.75685630451255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854e6657b87%3A0xed0e40a6b9508db5!2sHard+Rock+Cafe!5e0!3m2!1sen!2sua!4v1530700415164' }
  ];

  return (
    <div>
        <Navbar/>
      <header className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>Sales Offices</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Start</a></li>
            <li className="breadcrumb-item active" aria-current="page">Sales Offices</li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </header>
      {/* <!-- end page-header --> */}
      <section className="sales-offices">
        <div className="container">
          <div className="row">
            {offices.map((office, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="office-box">
                  <h5>{office.name}</h5>
                  <address dangerouslySetInnerHTML={{ __html: office.address }} />
                  <a data-fancybox data-type="iframe" data-src={office.mapSrc} href="javascript:;"><i className="fas fa-map-marker-alt"></i>CLICK FOR MAP</a>
                </div>
                {/* <!-- end office-box --> */}
              </div>
            ))}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end sales-offices --> */}
      <FooterBarSection/>
      <Footer/>
    </div>
  );
};

export default SalesOffices;
