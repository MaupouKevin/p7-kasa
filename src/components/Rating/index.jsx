import styled from 'styled-components';
import fullStar from '../../assets/fullStar.png'
import emptyStar from '../../assets/emptyStar.png'

const StarsContainer = styled.div`
display: flex;
margin-top: 10px;
gap: 15px;
justify-content: flex-end;
`

const Stars = styled.img`
width:24px;
`

function Rating({ rating }) {
    const maxStars = [1, 2, 3, 4, 5]; // Nombre maximum d'étoiles

	return (
        <StarsContainer>
            {maxStars.map((level) => // A chaque itération sur le tableau "MaxStars" tant que la note est supérieure ou égale au chiffre du tableau on affiche une étoile pleine, puis pour les autres itérations une étoile vide
            rating >= level ? 
            (
            <Stars key={level.toString()} src={fullStar} alt='Full Star'/> 
            ) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
            <Stars key={level.toString()} src={emptyStar} alt='Empty Star'/>
            )
            )}
        </StarsContainer>
    )
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* maxStars.map((maxStar, key) =>
		rating >= maxStar ? (
			<Stars
				src={fullStar}
				alt="Etoile pleine"
				className="fullStar"
				key={key}
			/>
		) : (
			<Stars
				src={emptyStar}
				alt="Etoile vide"
				className="emptyStar"
				key={key}
			/>
		)
	)
} */

export default Rating