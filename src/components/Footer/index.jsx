import styled from 'styled-components'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/footerLogo.png'


const FooterWrapper = styled.footer`
position: relative;
width: 100%;
height: 210px;
background-color: black;
`

const FooterLogo = styled.img `
position: absolute;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
width: 122px;
height: 39.5px;
display: flex;
`

const FooterCopyRight = styled.p`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
color: white;
`

function Footer() {
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
      <FooterWrapper>
        <Link onClick={handleLinkClick}>
          <FooterLogo src={footerLogo} />
        </Link>
        <FooterCopyRight>© 2020 Kasa. All rights reserved</FooterCopyRight>
      </FooterWrapper>
    )
  }
  
  export default Footer