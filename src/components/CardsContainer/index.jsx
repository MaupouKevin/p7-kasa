import styled from 'styled-components';
import data from '../../data/housingData';
import Card from '../Card';


const CardsContainer = styled.article`
    width: fit-content;   
    background-color: #F6F6F6;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2% 6%;
    padding: 2%;
    border-radius: 20px;
`

function CardContainer() {
    const housingData = data;
    if (!Array.isArray(housingData)) {
        console.error("Les données de logement ne sont pas au bon format.");
        return null; // Ou afficher un message d'erreur approprié
      }
    return (
        <CardsContainer>
            {housingData.map((housing) => (
                <Card key={housing.id} cover={housing.cover} title={housing.title} id={housing.id}/>
            ))}
        </CardsContainer>
    )
}

export default CardContainer