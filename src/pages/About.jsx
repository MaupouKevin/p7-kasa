import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import imageBanner from "../assets/img/aboutBanner.png";

const About = () => {
  const FiabiliteText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."

  const RespectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

  const ServiceText = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."

  const SecuriteText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  return (
    <main className="main">
      <section className="about">
        <Banner image={imageBanner} isAboutPage={true}/>
        <div className="about_collapses">
          <Collapse collapseTitle="Fiabilité" collapseText={FiabiliteText} isAboutPage={true}/>
          <Collapse collapseTitle="Respect" collapseText={RespectText} isAboutPage={true}/>
          <Collapse collapseTitle="Service" collapseText={ServiceText} isAboutPage={true}/>
          <Collapse collapseTitle="Sécurité" collapseText={SecuriteText} isAboutPage={true}/>
        </div>
      </section>
    </main>
  );
};

export default About;
