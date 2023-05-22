import Banner from "../../components/Banner"
import imgUrlHome from "../../assets/IMG.png"
import CardContainer from "../../components/CardsContainer";

function Home() {
    const textHome = "Chez vous,\n partout et ailleurs";
    
    return (
      <main>
      <Banner imageUrl={imgUrlHome} text={textHome} />
      <CardContainer/>
      </main>
    );
  }
  
  export default Home;