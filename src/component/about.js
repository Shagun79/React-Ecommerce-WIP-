import React from "react";
import Header from "./header";
import HeroSection from "./herosection";

const About = () => {


  const data= {
     name : "About this Store",
  };
  return (
    <>
      <Header />

      <HeroSection mydata={data} />
    </>
  );
};

export default About;
