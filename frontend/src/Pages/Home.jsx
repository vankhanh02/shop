import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import NewCollection from "../Components/NewCollection/NewCollection";
import Newsletter from "../Components/NewsLetter/Newsletter";
import ExploreCollection from "../Components/ExploreCollection/ExploreCollection";
import AppDownload from "../Components/AppDownload/AppDownload";

const Home = () => {
  return (
    <div>
      <Hero />
      <ExploreCollection />
      <Popular />
      <NewCollection />
      <Newsletter />
      <AppDownload />
    </div>
  );
};

export default Home;
