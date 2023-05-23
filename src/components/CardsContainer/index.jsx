import styled from 'styled-components'
import data from '../../data/housingData'
import Card from '../Card'
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"


const CardsContainer = styled.article`
    width: fit-content;   
    background-color: #F6F6F6;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2% 6%;
    padding: 2%;
    border-radius: 20px;

    @media (max-width: ${tabletSize}) {
        margin: 2% 5%;
    }
    
    @media (max-width: ${mobileSize}) {
        width: 90%;
        margin: 2% 5%;
        padding: 0%;
        background-color: #FFFFFF;    
    };
`

function CardContainer() {
    const housingData = data;
    if (!Array.isArray(housingData)) {
        console.error("Les données de logement ne sont pas au bon format.");
        return null;
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