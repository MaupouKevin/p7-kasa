import styled, { css } from "styled-components"
import { useState } from "react";
import downArrow from "../../assets/downArrow.png"
import upArrow from "../../assets/upArrow.png"

const CollapseContainer = styled.section`
display: flex;
flex-direction: column;
width: 100%;
margin: 0% 2% 4% 2%; 
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
font-weight: 500;
height: 47px;
`

const  CollapseTitle = styled.h2`
font-family: 'Montserrat';
font-size: 18px;
font-weight: 500;
margin: 0px;
padding: 0px;
`

const DownArrow = styled.img`
`
const UpArrow = styled.img`
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
/* height: ${({ page }) => (page === "pageAbout" ? "fit-content" : "230px")}; */
height: 230px;
margin: 0px;
padding: 30px 20px 20px 20px;
border-radius: 10px;
animation: collapse 4s ease-out forwards;
font-size: 18px;
font-weight: 400;
line-height: 1.5em;
color: red;
background-color: #F6F6F6;

${({ pageAbout }) =>
pageAbout &&
css`
  height: fit-content;
`}
`

function Collapse ( props, page ) {

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
            <CollapseHidden visible={toggle} >
                <CollapseText pageAbout={pageAboutStyle}>{props.collapseText}</CollapseText>
            </CollapseHidden>
        </CollapseContainer>

    )
}

export default Collapse