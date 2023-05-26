import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import housingData from "../Data/housingData.json";
import HousingInfos from "../components/HousingInfos";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";

function Housing() {
  const { id } = useParams();
  const CurrentHousing = housingData.find((acc) => acc.id === id);
  const navigate = useNavigate();

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
      host,
      rating,
      tags,
      description,
      equipments,
    } = CurrentHousing;

    return (
      <main className="housing">
        <Carrousel pictures={pictures} />
        <HousingInfos title={title} location={location} tags={tags} host={host} rating={rating}/>
        <div className="housing_collapses">
          <Collapse collapseTitle="Description" collapseText={description} />
          <Collapse collapseTitle="Equipement" collapseText={equipments} />
        </div>
      </main>
    );
  }

  return null; // Retourne null si le logement n'est pas trouvé ou en cours de chargement
}

export default Housing;