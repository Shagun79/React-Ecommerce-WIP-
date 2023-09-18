import React, { useContext } from "react";
import { AppContext } from "./contextAPI";
import Products from "./products";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useContext(AppContext); // Corrected variable name

  console.log(featureProducts, "2");

  if (isLoading) {
    return <div>.....Loading</div>;
  }

  return (
    <>
      <div className="F-container">
        <div className="intro-data"> CHECK NOW!</div>
        <div className="common-heading"> <h2>  Our Feature Services  </h2></div>
        <div className="grid-three-column">
          {featureProducts.map((data) => {
          
            return <Products key={data.id} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
