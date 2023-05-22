import { Link } from "react-router-dom"
import styled from 'styled-components';
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"

const CardImg = styled.img`
    width: 100%;
    height: 75%;
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const CardTitle = styled.h2`
    display: flex;
    align-items: center;
    width: 90%;
    height: 50px;
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 500;
    color: white;
    margin: 15px 10px;

    @media (max-width: ${tabletSize}) {
        margin: 10px 10px;
    }
    
    @media (max-width: ${mobileSize}) {
        margin: 5px 10px;    
    };
`
const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    background: linear-gradient(rgba(255, 99, 99, 167) 0%, rgba(200, 72, 72, 134) 75%, rgba(145, 55, 55, 100) 100%);
    text-decoration: none;
    margin: 2% 2%;

    @media (max-width: ${tabletSize}) {
        width: 270px;
        height: 270px;
        margin: 2% 0%;
    }

    @media (max-width: ${mobileSize}) {
        width: 100%;
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