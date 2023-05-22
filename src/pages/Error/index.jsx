import styled from 'styled-components'
import { Link } from "react-router-dom"
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"

const ErrorContainer = styled.main`
display: flex;
justify-content: center;
flex-direction: column;
`

const ErrorTitle = styled.h1`
display: flex;
justify-content: center;
margin: 3% 0% 1% 0%;
font-weight: 700;
font-size: 288px;

@media (max-width: ${tabletSize}) {
    font-size: 148px;
}

@media (max-width: ${mobileSize}) {
    font-size: 96px;
    margin: 180px 0px 0px 0px;
}
`

const ErrorText = styled.p`
display: flex;
justify-content: center;
margin: 0px;
font-size: 36px;
text-align: center;

@media (max-width: ${tabletSize}) {
    font-size: 24px;
    margin: 0px 35px;
}

@media (max-width: ${mobileSize}) {
    font-size: 18px;
    margin: 0px 57px;
    white-space: pre-line;

}
`

const ErrorLink = styled(Link)`
display: flex;
justify-content: center;
font-weight: 500;
font-size: 18px;
margin: 10% 0% 7% 0%;
color: #FF6060;

@media (max-width: ${tabletSize}) {
    font-size: 16px;
}

@media (max-width: ${mobileSize}) {
    font-size: 14px;
    margin: 133px 0px 235px 0px;
}
`

function Error() {

    const TextError = "Oups! La page que \n vous demandez n'existe pas."

    return (
    <ErrorContainer>
        <ErrorTitle>404</ErrorTitle>
        <ErrorText>{TextError}</ErrorText>
        <ErrorLink to="/">
            Retourner sur la page d’accueil
        </ErrorLink>
    </ErrorContainer>
)
}

export default Error