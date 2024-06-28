// Preloader.jsx
import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="layer"></div>
      {/* <!-- end layer --> */}
      <div className="inner">
        <figure>
          <img src="images/preloader.gif" alt="Image" />
        </figure>
        <p>
          <span
            className="text-rotater"
            data-text="Homepark | Elements | Loading"
          >
            Loading
          </span>
        </p>
      </div>
      {/* <!-- end inner --> */}
      <div class="transition-overlay">
        <div class="layer"></div>
      </div>
    </div>
  );
};

export default Preloader;
