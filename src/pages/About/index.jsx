import Banner from "../../components/Banner"
import imgUrlAbout from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import Collapse from "../../components/Collapse"
import styled from 'styled-components'
import { mobileSize } from "../../utils/style/GlobalStyle"

const AboutMain = styled.main`
    display: flex;
    flex-direction: column;
`
const CollapsesContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2% 10% 5% 10%;
    
    @media (max-width: ${mobileSize}) {
        margin: 2% 5% 5% 5%;
    } 
`

function About() {

    const FiabiliteText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."

    const RespectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

    const ServiceText = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."

    const SecuriteText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

return (

        <AboutMain>
        <Banner imageUrl={imgUrlAbout} text='' isAboutPage={true}/>
        <CollapsesContainer>
            <Collapse collapseTitle="Fiabilité" collapseText={FiabiliteText} isAboutPage={true}/>
            <Collapse collapseTitle="Respect" collapseText={RespectText} isAboutPage={true}/>
            <Collapse collapseTitle="Service" collapseText={ServiceText} isAboutPage={true}/>
            <Collapse collapseTitle="Sécurité" collapseText={SecuriteText} isAboutPage={true}/>
            </CollapsesContainer>
        </AboutMain>

        )
    }
    
export default About