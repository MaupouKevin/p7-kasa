import styled, { css } from "styled-components"
import PropTypes from 'prop-types';
import { useState } from "react";
import downArrow from "../../assets/downArrow.png"
import upArrow from "../../assets/upArrow.png"
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"

const CollapseContainer = styled.section`
display: flex;
flex-direction: column;
width: 100%;
margin: 0% 1% 3% 1%;
`

const  CollapseVisible = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 10px;
border-radius: 10px;
background-color: #FF6060;
color: white;
transform: translateY(10px);
font-size: 18px;
height: 47px;

@media (max-width: ${tabletSize}) {
}

@media (max-width: ${mobileSize}) {
    height: 30px;
    border-radius: 5px;
} 
`

const  CollapseTitle = styled.h2`
font-size: 18px;
font-weight: 500;
margin: 0px;
padding: 0px;

@media (max-width: ${mobileSize}) {
  font-size: 13px;
} 
`

const DownArrow = styled.img`

@media (max-width: ${tabletSize}) {
  width: 20px;
}

@media (max-width: ${mobileSize}) {
  width: 16px;
} 
`
const UpArrow = styled.img`

@media (max-width: ${tabletSize}) {
  width: 20px;
}

@media (max-width: ${mobileSize}) {
  width: 16px;
} 
`

const  CollapseHidden = styled.div`
display: flex;
height: ${({ visible, height }) => (visible ? height : "0px")};
display: ${({ visible }) => (visible ? "block" : "none")};
opacity: ${({ visible }) => (visible ? 1 : 0)};
`


const CollapseText = styled.p`
display: flex;
flex-direction: column;
list-style: none;
height: 230px;
margin: 0px;
padding: 30px 20px 20px 20px;
border-radius: 10px;
font-size: 18px;
font-weight: 400;
line-height: 1.5em;
background-color: #F6F6F6;
${props =>
  props.isAboutPage &&
  css`
  height: fit-content;
  `};

    @media (max-width: ${tabletSize}) {
      font-size: 16px;
      height: 190px;
    }
  
    @media (max-width: ${mobileSize}) {
      font-size: 12px;
      height: 145px;
    }

/* ${({ pageAbout }) =>
pageAbout &&
css`
  height: fit-content;
`} */
`

function Collapse ( props, page, isAboutPage ) {

    const [toggle, setToggle] = useState(false); // je definie le state du toggle (et false par défaut)

    const toggleState = () => {
		//je définie la fonction toggleState qui modifie la valeur toggle au clic
		setToggle(!toggle);
	};

    const pageAboutStyle = page === "pageAbout";

    return (
        <CollapseContainer >
            <CollapseVisible onClick={toggleState}>
                <CollapseTitle>{props.collapseTitle}</CollapseTitle>
                {toggle ? (
          <UpArrow src={upArrow} alt="Up Arrow" />
        ) : (
          <DownArrow src={downArrow} alt="Down Arrow" />
        )}
            </CollapseVisible>
            <CollapseHidden visible={toggle} isAboutPage={isAboutPage}>
                <CollapseText pageAbout={pageAboutStyle}>{props.collapseText}</CollapseText>
            </CollapseHidden>
        </CollapseContainer>

    )
}
Collapse.propTypes = {
  isAboutPage: PropTypes.bool
};
export default Collapse