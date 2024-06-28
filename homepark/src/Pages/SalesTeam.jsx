import React from 'react';
import Navbar from '../components/Navbar';
import FooterBarSection from '../components/FooterBar';
import Footer from '../components/Footer';
const SalesTeam = () => {
  const teamMembers = [
    { name: 'Sasha Alexander', position: 'Senior Sales Officer', image: 'images/team01.jpg' },
    { name: 'Sasha Alexander', position: 'Senior Sales Officer', image: 'images/team02.jpg' },
    { name: 'Sasha Alexander', position: 'Senior Sales Officer', image: 'images/team03.jpg' },
    { name: 'Sasha Alexander', position: 'Senior Sales Officer', image: 'images/team04.jpg' },
    { name: 'Sasha Alexander', position: 'Senior Sales Officer', image: 'images/team05.jpg' },
    { name: 'Sasha Alexander', position: 'Senior Sales Officer', image: 'images/team06.jpg' }
  ];

  return (
    <div>
        <Navbar/>
      <header className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>Sales Team</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Start</a></li>
            <li className="breadcrumb-item active" aria-current="page">Sales Team</li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </header>
      {/* <!-- end page-header --> */}
      <section className="sales-team">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-6" key={index}>
                <figure>
                  <img src={member.image} alt="Image" />
                  <figcaption>
                    <h4><span>{member.name.split(' ')[0]}</span> {member.name.split(' ')[1]}</h4>
                    <small>{member.position}</small>
                    <ul>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i>LINKEDIN</a></li>
                      <li><a href="#"><i className="fab fa-facebook-f"></i>FACEBOOK</a></li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end sales-team --> */}
      <FooterBarSection/>
      <Footer/>
    </div>
  );
};

export default SalesTeam;
