import React from "react";

import Cards from "./Cards";
import data from "../Data/housingData.json";

function CardsContainer() {
  const housingData = data; // Données de logement (supposons qu'elles soient déjà définies)
  if (!Array.isArray(housingData)) { // Vérifie si housingData est un tableau
      console.error("Les données de logement ne sont pas au bon format.");
      return null; // Retourne null si les données de logement ne sont pas au bon format
  }
  return (
      <article className='home__housing'>
          {housingData.map((housing) => (
              <Cards key={housing.id} cover={housing.cover} title={housing.title} id={housing.id}/>
              // Utilise le composant Card pour chaque élément du tableau housingData
              // Les props (id, title, cover) sont passées avec les valeurs correspondantes de chaque élément
              // key est utilisé pour donner une clé unique à chaque élément de la liste
          ))}
      </article>
  )
};

export default CardsContainer;
