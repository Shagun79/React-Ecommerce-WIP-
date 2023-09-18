import React from "react";
import Header from "./header";
import HeroSection from "./herosection";
import Trusted from "./trusted";
import "./entire.css";
import Service from "./services";
import Footer from "./footer";
import FeatureProduct from "./FeatureProduct";


const Home = () => {
   const  Height=  -87;
  const data = { name: "Shagun Store" };
  return (
    <>
      <Header />
      <HeroSection mydata={data} />;
      <FeatureProduct/>
      <Service />
    
    
      <Trusted />
      <Footer height={Height} />
    </>
  );
};

export default Home;
