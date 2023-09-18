import React, { useContext } from "react";
import Header from "./header";
import HeroSection from "./herosection";
import { AppContext } from "./contextAPI";

const About = () => {
  const myname = useContext(AppContext);

  const data = {
    name: "About this Store",
  };
  return (
    <>
      <Header />

      <HeroSection mydata={data} />
    </>
  );
};

export default About;
