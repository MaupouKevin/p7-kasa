import { useState } from 'react'
import leftArrow from '../../assets/img/arrowLeft.jpg'
import rightArrow from '../../assets/img/arrowRight.jpg'

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
        <section className='carrousel'>
            <img className='carrousel_pic' key={id} src={pictures[pictureIndex]} alt={title}/>  
            {pictures.length > 1 && (
                <img className='carrousel_leftArrow' src={leftArrow} alt='leftArrow' onClick={handlePrevClick}/>
            )}
            {pictures.length > 1 && (
                <img className='carrousel_rightArrow' src={rightArrow} alt='rightArrow' onClick={handleNextClick}/>
            )}
            <span className='carrousel_count'>{pictureIndex + 1}/{pictures.length}</span> {/* "+1" pour ne pas commencer à 0 et ".length" pour recupérer le nombre de photos */}
        </section>

    )
}

export default Carrousel
