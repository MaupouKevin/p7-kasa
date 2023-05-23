import { Link } from "react-router-dom"
import styled from 'styled-components';
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"

const CardImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 10px;
    filter: brightness(80%);
    z-index: 0;
`

const CardTitle = styled.h2`
    position: absolute;
    bottom: 1%;
    display: flex;
    align-items: center;
    width: 90%;
    height: 50px;
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 500;
    color: white;
    margin: 15px 10px;
    z-index: 1;

    @media (max-width: ${tabletSize}) {
        margin: 10px 10px;
    }
    
    @media (max-width: ${mobileSize}) {
        margin: 5px 10px;    
    };
`
const CardLink = styled(Link)`
    position : relative;
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    text-decoration: none;
    margin: 2% 2%;

    @media (max-width: ${tabletSize}) {
        width: 270px;
        height: 270px;
        margin: 2% 0%;
    }

    @media (max-width: ${mobileSize}) {
        width: 335px;
        height: 255px;
        margin: 2% 0%;
    };
`

function Card({id, title, cover}) {
    return (
        <CardLink to={`/housing/${id}`}>
            <CardImg src={cover}/>
            <CardTitle>{title}</CardTitle>
        </CardLink>
    )
}

export default Card