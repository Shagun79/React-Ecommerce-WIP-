import React from "react";
import Header from "./header";
import HeroSection from "./herosection";
import Trusted from "./trusted";
import "./entire.css";
import Service from "./services";
import Footer from "./footer";

const Home = () => {
   const  Height=  -60;
  const data = { name: "Shagun Store" };
  return (
    <>
      <Header />
      <HeroSection mydata={data} />;
      <Service />
      <Trusted />
      <Footer height={Height} />
    </>
  );
};

export default Home;
