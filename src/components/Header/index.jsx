import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 3% 6%;
`

const HomeLogo = styled.img`
  display: flex;
  justify-content: flex-end;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 40%;
  right: 0%;
  flex-wrap: nowrap;
`
const LogoLink = styled(Link)`
display: flex;
justify-content: flex-start;
`
const StyledLink = styled(Link)`
display: flex;
margin-left: 20%;
color: #FF6060;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
&:focus,
&:active {
  text-decoration: none;
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
  



  