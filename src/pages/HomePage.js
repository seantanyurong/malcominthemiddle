// import { Fragment } from "react";

import HeroBanner from "../components/Layout/HomePage/HeroBanner";
import Body from "../components/Layout/HomePage/Body";
import Random from "../components/Layout/HomePage/Random";
import Results from "../components/Layout/HomePage/Results";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Body />
      <Random />
    </div>
  );
};

export default HomePage;
