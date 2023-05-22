import styled from 'styled-components'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/footerLogo.png'
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"


const FooterWrapper = styled.footer`
width: 100%;
height: 135px;
padding: 75px 0px 0px 0px;
background-color: black;

@media (max-width: ${mobileSize}) {
  padding: 65px 0px 0px 0px;
  height: 145px;
};
`

const FooterLogo = styled.img `
width: 122px;
height: 39.5px;
`

const FooterCopyRight = styled.p`
display: flex;
justify-content: center;
font-style: normal;
font-size: 24px;
color: white;
margin: 30px 0px 0px 0px;

@media (max-width: ${tabletSize}) {
  font-size: 18px;
}

@media (max-width: ${mobileSize}) {
  font-size: 12px;
};
`

const FooterLink = styled(Link)`
display: flex;
justify-content: center;
`

function Footer() {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
      <FooterWrapper>
        <FooterLink onClick={handleLinkClick}>
          <FooterLogo src={footerLogo} />
        </FooterLink>
        <FooterCopyRight>© 2020 Kasa. All rights reserved</FooterCopyRight>
      </FooterWrapper>
    )
  }
  
  export default Footer