// PropertyPlansSection.jsx
import React from 'react';

const PropertyPlansSection = () => {
  return (
    <section className="property-plans">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 wow fadeInUp">
            <b>05</b>
            <h4><span>Homepark</span> Living Spaces</h4>
            <h3>Decorated Flats in Pozniaky - Kiev</h3>
            <p>We are waiting for you in our sales office for having all these opportunities with affordable prices and appropriate payment opportunities.</p>
            <table>
              <tbody>
                <tr>
                  <td>Total area:</td>
                  <td>680 square meters</td>
                </tr>
                <tr>
                  <td>Total Floor:</td>
                  <td>24 Floor</td>
                </tr>
                <tr>
                  <td>Parking Lot:</td>
                  <td>5 Large</td>
                </tr>
                <tr>
                  <td>Social Area:</td>
                  <td>860 m²</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- end col-6 --> */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.05s">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item"> <a className="nav-link active" data-toggle="pill" href="#tab-one">1 Room 47m²</a> </li>
              <li className="nav-item"> <a className="nav-link" data-toggle="pill" href="#tab-two" role="tab">2 Rooms 65m²</a> </li>
              <li className="nav-item"> <a className="nav-link" data-toggle="pill" href="#tab-three" role="tab">3 Rooms 90m²</a> </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-one">
                <figure><img src="images/plan01.jpg" alt="Image" /></figure>
              </div>
              {/* <!-- end tab-pane --> */}
              <div className="tab-pane fade" id="tab-two">
                <figure><img src="images/plan02.jpg" alt="Image" /></figure>
              </div>
              {/* <!-- end tab-pane --> */}
              <div className="tab-pane fade" id="tab-three">
                <figure><img src="images/plan03.jpg" alt="Image" /></figure>
              </div>
              {/* <!-- end tab-pane --> */}
            </div>
            {/* <!-- end tab-content --> */}
          </div>
          {/* <!-- end col-6 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end property-plans -->
  );
};

export default PropertyPlansSection;
