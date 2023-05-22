import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 3% 6%;

  @media (max-width: ${tabletSize}) {
    margin: 3% 5%;
  }

  @media (max-width: ${mobileSize}) {
    margin: 4% 5%;
  }
`

const HomeLogo = styled.img`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${tabletSize}) {
    width: 80%;
  }

  @media (max-width: ${mobileSize}) {
    width: 60%;
  }
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  width: 40%;
  height: 100%;
  right: 0%;
  flex-wrap: nowrap;

  @media (max-width: ${tabletSize}) {
    width: 58%;
  }

  @media (max-width: ${mobileSize}) {
    width: 60%;
  };
`
const LogoLink = styled(Link)`
display: flex;
justify-content: flex-start;
`
const StyledLink = styled(Link)`
display: flex;
margin-left: 20%;
color: #FF6060;
font-weight: 500;
font-size: 24px;
text-decoration: none;
&:focus,
&:active {
  text-decoration: underline;
};

@media (max-width: ${tabletSize}) {
  font-size: 16px;
  margin-left: 15%;
}

@media (max-width: ${mobileSize}) {
  font-size: 12px;
  margin-left: 10%;
  text-transform: uppercase;
};
`

function Header() {
    return (
      <HeaderWrapper>
        <LogoLink to="/">
          <HomeLogo src={logo} />
        </LogoLink>
        <NavContainer>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/abouts">A Propos</StyledLink>
        </NavContainer>
      </HeaderWrapper>
    )
  }
  
  export default Header
  



  