import React from "react";
import PropTypes from "prop-types";


function Banner({ image, isAboutPage }) {
  const bannerText = "Chez vous,\n partout et ailleurs";
  
  return (
    
    <div className={`banner ${isAboutPage ? 'is-about-page' : ''}`}>
      <img
        src={image}
        alt="une vue sur des montagnes de toutes beautées"
        className="banner_img"
      />
      {!isAboutPage && <h1 className="banner_text">{bannerText}</h1>}
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  isAboutPage: PropTypes.bool,
};

Banner.defaultProps = {
  isAboutPage: false,
};

export default Banner;

