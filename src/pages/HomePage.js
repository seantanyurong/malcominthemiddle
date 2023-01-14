import { Fragment } from "react";

import HeroBanner from "../components/Layout/HomePage/HeroBanner";
import Body from "../components/Layout/HomePage/Body";
import Stats from "../components/Layout/HomePage/Stats";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Body />
      <Stats />
    </div>
  );
};

export default HomePage;
