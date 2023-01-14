// import { Fragment } from "react";

import HeroBanner from "../components/Layout/HomePage/HeroBanner";
import Body from "../components/Layout/HomePage/Body";
import Stats from "../components/Layout/HomePage/Stats";
import Random from "../components/Layout/HomePage/Random";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Body />
      <Stats />
      <Random />
    </div>
  );
};

export default HomePage;
