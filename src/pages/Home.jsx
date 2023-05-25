import React from "react";
import Banner from "../components/Banner";
import image from "../assets/img/banner.png";
import CardsContainer from "../components/CardsContainer";



const Home = () => {
  return (
    <main className="main">
      <Banner image={image} />
      <CardsContainer />
    </main>
  );
};

export default Home;
