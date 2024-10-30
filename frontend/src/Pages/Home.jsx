import React from "react";
import NewCollection from "../Components/NewCollection/NewCollection";
import Newsletter from "../Components/NewsLetter/Newsletter";
import Banner from "../Components/Banner/Banner";
import ExploreCollection from "../Components/ExploreCollection/ExploreCollection";
import { OtherFlatform } from "../Components/OtherFlatform/OtherFlatform";
const Home = () => {
  return (
    <div>
      <Banner />
      <ExploreCollection />
      <NewCollection />
      <Newsletter />
      <OtherFlatform />
    </div>
  );
};

export default Home;
