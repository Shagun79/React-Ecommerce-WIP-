import React, { useContext } from "react";
import { AppContext } from "./contextAPI";
import Header from "./header";

 import ProductCard from "./productCard";

const Products = () => {
  const { resJson } = useContext(AppContext);
  console.log(resJson, "sajju");
  return (
    <>
      {" "}
      <Header />
      <div className="AllProducts">
        {resJson.map((data, id) => {
          return <ProductCard key={id} {...data} />;
        })}
      </div>
    </>
  );
};

export default Products;
