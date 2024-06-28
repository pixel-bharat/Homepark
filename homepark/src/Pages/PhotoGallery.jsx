import React from 'react';
import Navbar from '../components/Navbar';
import FooterBarSection from '../components/FooterBar';
import Footer from '../components/Footer';

const PhotoGallery = () => {
  const galleryItems = [
    { category: 'one', src: 'images/gallery-thumb01.jpg', alt: 'Image' },
    { category: 'two', src: 'images/gallery-thumb07.jpg', alt: 'Image' },
    { category: 'three', src: 'images/gallery-thumb02.jpg', alt: 'Image' },
    { category: 'one', src: 'images/gallery-thumb04.jpg', alt: 'Image' },
    { category: 'two', src: 'images/gallery-thumb03.jpg', alt: 'Image' },
    { category: 'three', src: 'images/gallery-thumb09.jpg', alt: 'Image' },
    { category: 'two', src: 'images/gallery-thumb10.jpg', alt: 'Image' },
    { category: 'one', src: 'images/gallery-thumb01.jpg', alt: 'Image' },
    { category: 'three', src: 'images/gallery-thumb05.jpg', alt: 'Image' },
    { category: 'one', src: 'images/gallery-thumb11.jpg', alt: 'Image' },
    { category: 'two', src: 'images/gallery-thumb12.jpg', alt: 'Image' },
    { category: 'three', src: 'images/gallery-thumb07.jpg', alt: 'Image' },
    { category: 'one', src: 'images/gallery-thumb01.jpg', alt: 'Image' },
    { category: 'two', src: 'images/gallery-thumb03.jpg', alt: 'Image' },
    { category: 'one', src: 'images/gallery-thumb11.jpg', alt: 'Image' },
    { category: 'one', src: 'images/gallery-thumb08.jpg', alt: 'Image' },
  ];

  return (
    <div>
        <Navbar/>
      <div className="page-header" data-background="images/slide01.jpg" data-stellar-background-ratio="1.15">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>The smaller male cones release pollen, which fertilizes the female</p>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Start</a></li>
            <li className="breadcrumb-item active" aria-current="page">Photo Gallery</li>
          </ol>
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end page-header --> */}
      <div className="photo-gallery">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="gallery-filter">
                <li><a href="javascript:void(0);" data-filter="*" className="current">ALL AREA</a></li>
                <li><a href="javascript:void(0);" data-filter=".one">INTERIOR</a></li>
                <li><a href="javascript:void(0);" data-filter=".two">BUILDING</a></li>
                <li><a href="javascript:void(0);" data-filter=".three">SPACES</a></li>
              </ul>
              <ul className="gallery">
                {galleryItems.map((item, index) => (
                  <li className={item.category} key={index}>
                    <a href={item.src} data-fancybox>
                      <img src={item.src} alt={item.alt} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <!-- end col-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end photo-gallery --> */}
      <FooterBarSection/>
      <Footer/>
    </div>
  );
};

export default PhotoGallery;
