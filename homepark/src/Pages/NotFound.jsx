import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterBarSection from '../components/FooterBar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div>
      <Navbar/>
      <header className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>404</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Start</Link></li>
            <li className="breadcrumb-item active" aria-current="page">404</li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </header>
      {/* <!-- end page-header --> */}
      <section className="error404">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <figure><img src="images/error404.png" alt="404 Image" /></figure>
              <h2>PAGE NOT FOUND</h2>
              <p>Looks like something went wrong<br />Relax, sometimes this can happen to visitors.</p>
              <Link to="/">GO HOMEPAGE</Link>
            </div>
            {/* <!-- end col-8 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      <FooterBarSection/>
      <Footer/>
    </div>
  );
};

export default NotFound;
