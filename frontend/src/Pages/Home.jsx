import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollection from "../Components/NewCollection/NewCollection";
import Newsletter from "../Components/NewsLetter/Newsletter";
import Banner from "../Components/Banner/Banner";
import ExploreCollection from "../Components/ExploreCollection/ExploreCollection";
const Home = () => {
  return (
    <div>
      <Banner />
      <ExploreCollection />
      <NewCollection />
      <Newsletter />
      {/* <Hero/>
        <Popular/>
        <Offer/>
        <NewCollection/>
        <Newsletter/> */}
    </div>
  );
};

export default Home;
