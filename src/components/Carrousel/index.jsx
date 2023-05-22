import { useState } from 'react'
import styled from 'styled-components'
import leftArrow from '../../assets/leftArrow.png' 
import rightArrow from '../../assets/rightArrow.png'
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"

const CarrouselDisplay = styled.section`
    display: flex;
    position: relative;
    width: 88%;
    height: 415px;
    margin: 0% 6%;

    @media (max-width: ${tabletSize}) {
        width: 90%;
        height: 315px;
        margin: 0% 5%;
    }
    
    @media (max-width: ${mobileSize}) {
        width: 90%;
        height: 255px;
        margin: 0% 5%;
    };
`

const CarrouselPic = styled.img`
    width: 100%;
    border-radius: 25px;
    object-fit: cover;

    @media (max-width: ${tabletSize}) {
        border-radius: 17px;
    }
    
    @media (max-width: ${mobileSize}) {
        border-radius: 10px;
    };
`

const LeftArrow = styled.img`
    width: 46px;
    position: absolute;
    top: 40%;
    left: 3%;
    opacity: 0.6;
    cursor: pointer;

    @media (max-width: ${tabletSize}) {
        width: 32px;
    }
    
    @media (max-width: ${mobileSize}) {
        width: 12px;
        top: 45%;
    };
`

const RightArrow = styled.img`
    position: absolute;
    transform-origin: 50px 50px;
    width: 46px;
    top: 40%;
    right: 3%;
    opacity: 0.6;
    cursor: pointer;

    @media (max-width: ${tabletSize}) {
        width: 32px;
    }
    
    @media (max-width: ${mobileSize}) {
        width: 12px;
        top: 45%;
    };
`
const CarrouselCount = styled.span`
font-size: 18px;
color: #FFFFFF;
position: absolute;
bottom: 5%;
left: 50%;
`

function Carrousel({ id, title, pictures}) {
    const [ pictureIndex , setPictureIndex] = useState(0)

    function handleNextClick() {
        if (pictureIndex < pictures.length - 1) { // Si l'index de la photo est inférieur à l'index de la dernière photo
            setPictureIndex(pictureIndex + 1) //
        } else {
            setPictureIndex(0) // Si c'est la dernière photo, passer à la première photo
        }
    }

    function handlePrevClick() {
        if (pictureIndex > 0) { // Si l'index de la photo est supérieur à l'index de la première photo 
            setPictureIndex(pictureIndex - 1)
        } else {
            setPictureIndex(pictures.length - 1) // Si c'est la première photo, passer à la dernière photo
        }
    }
 
    return(
        <CarrouselDisplay >
            <CarrouselPic key={id} src={pictures[pictureIndex]} alt={title}/>  
            <LeftArrow src={leftArrow} onClick={handlePrevClick}/>
            <RightArrow src={rightArrow} onClick={handleNextClick}/>
            <CarrouselCount>{pictureIndex + 1}/{pictures.length}</CarrouselCount> {/* "+1" pour ne pas commencer à 0 et ".length" pour recupérer le nombre de photos */}
        </CarrouselDisplay>

    )
}

export default Carrousel