import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/img/footerLogo.png";

function Footer()  {
  const effectiveYear = new Date().getFullYear();
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
      <footer className='footer'>
        <Link className='footer_link' onClick={handleLinkClick}>
          <img className='footer_logo'src={footerLogo} alt='logo' />
        </Link>
        <p className='footer_copyright'>  
        &copy;
  {effectiveYear} Kasa. All rights reserved</p>
      </footer>
    )
};

export default Footer;
