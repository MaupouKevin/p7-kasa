import { useState } from 'react'
import styled from 'styled-components'
import leftArrow from '../../assets/leftArrow.png' 
import rightArrow from '../../assets/rightArrow.png' 

const CarrouselDisplay = styled.section`
    display: flex;
    position: relative;
    width: 88%;
    height: 415px;
    margin: 0% 6%;
`

const CarrouselPic = styled.img`
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
`

const LeftArrow = styled.img`
    width: 46px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 3%;
    opacity: 0.6;
`

const RightArrow = styled.img`
    position: absolute;
    width: 46px;
    transform: translate(-50%, -50%);
    top: 50%;
    right: 0%;
    opacity: 0.6;
`
const CarrouselCount = styled.span`
font-family: 'Montserrat';
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