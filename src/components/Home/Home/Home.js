import React from "react";
import Banner from "../Banner/Banner";
import Dentists from "../Dentists/Dentists";
import PriceTable from "../PriceTable/PriceTable";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <PriceTable></PriceTable>
      <Dentists></Dentists>
    </div>
  );
};

export default Home;
