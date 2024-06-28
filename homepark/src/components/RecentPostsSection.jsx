// RecentPostsSection.jsx
import React from 'react';

const RecentPostsSection = () => {
  // Dummy data for posts (can be replaced with actual data fetched from an API or stored in state)
  const posts = [
    {
      id: 1,
      date: '24, September 2019',
      image: 'images/recent-news01.jpg',
      title: '50th Anniversary of the Turner School of Construction Management',
      content:
        'The smaller male cones release pollen, which fertilizes the female.',
    },
    {
      id: 2,
      date: '06, November 2019',
      image: 'images/recent-news02.jpg',
      title: 'The Center for Construction Research and Training to Receive 2019 Award',
      content:
        'The smaller male cones release pollen, which fertilizes the female.',
    },
    {
      id: 3,
      date: '31, April 2019',
      image: 'images/recent-news03.jpg',
      title: 'Henry C. Turner Prize for Innovation in Construction Company',
      content:
        'The smaller male cones release pollen, which fertilizes the female.',
    },
  ];

  return (
    <section className="recent-posts">
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp">
            <b>07</b>
            <h4>
              <span>Homepark</span> Living Spaces
            </h4>
            <small>Smaller male cones</small>
          </div>
          {/* <!-- end col-12 --> */}
          {posts.map((post) => (
            <div key={post.id} className="col-lg-4 wow fadeInUp" data-wow-delay="0s">
              <div className="post-box">
                <figure>
                  <img src={post.image} alt="Image" />
                </figure>
                <span>{post.date}</span>
                <h6>
                  <a href="#">{post.title}</a>
                </h6>
                <p>{post.content}</p>
              </div>
              {/* <!-- end post-box --> */}
            </div>
            // <!-- end col-4 -->
          ))}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    // <!-- end recent-posts -->
  );
};

export default RecentPostsSection;
