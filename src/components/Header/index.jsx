import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const HeaderWrapper = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: space-between;
  margin: 3% 6%;

`

const HomeLogo = styled.img`
  display: flex;
`

const NavContainer = styled.nav`
  display: flex;
  width: 40%;
  justify-content: flex-end;
  flex-wrap: nowrap;
`

const StyledLink = styled(Link)`
display: flex;
width: auto;
margin-left: 20%;
color: #FF6060;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 150%;
&:focus,
&:active {
  text-decoration: none;
};
`

function Header() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <HomeLogo src={logo} />
        </Link>
        <NavContainer>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/abouts">A Propos</StyledLink>
        </NavContainer>
      </HeaderWrapper>
    )
  }
  
  export default Header
  



  