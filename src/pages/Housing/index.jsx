import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import HousingInfos from "../../components/HousingInfos"
import HousingData from "../../data/housingData"
import styled from 'styled-components'
import Carrousel from "../../components/Carrousel"
import Collapse from "../../components/Collapse"

const HousingDisplay = styled.main`
display: flex;
flex-direction: column;
`

const CollapsesContainer = styled.section`
display: flex;
width: 92%;
margin: 0% 4%;
`

function Housing() {
    const { id } = useParams() // Récupération de l'id en paramètre URL, avec {id} entre accolades sinon reconnu en tant qu'objet
	const CurrentHousing = HousingData.find((acc) => acc.id === id) // Utilisation de la méthode .find pour chercher le logement avec son id
    const navigate = useNavigate()

	useEffect(() => {
		if (CurrentHousing === undefined) {
			navigate("/404");
		}
	}, [CurrentHousing, navigate]);

	if (CurrentHousing) {
		const {
			title,
			location,
			pictures,
			tags,
            host,
            rating,
			description,
			equipments
		} = CurrentHousing;

		const EquipList =
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));

    return (
	<HousingDisplay>
		<Carrousel pictures={pictures}/>
    	<HousingInfos title={title} location={location} tags={tags} host={host} rating={rating}/>
		<CollapsesContainer>
			<Collapse collapseTitle="Description" collapseText={description} />
			<Collapse collapseTitle="Équipements" collapseText={EquipList} />
		</CollapsesContainer>
	</HousingDisplay>
    )
}}

export default Housing