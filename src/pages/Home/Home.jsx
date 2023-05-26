import React from "react";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/img/banner.png";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

function Home() {
  return (
    <main className="main">
      <Banner image={image} />
      <CardsContainer />
    </main>
  );
};

export default Home;
