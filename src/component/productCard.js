import React, { useEffect, useState } from "react";

const ProductCard = ({  data,handleClick }) => {
  const {image, price, name, id, category}=data
  return (
    <>
      <div>
        <div className="card">
          <figure>
            <img src={image} alt={name} className="api-image" />
          </figure>
        </div>

        <div className="card-data">
          <div className="card-data-flex">
            <h1> {name}</h1>
            <p className="card-data-price"> {price}</p>
          </div>
        </div>
        <i
          class="fa fa-shopping-cart"
          onClick={() => {
            handleClick(data);
          }}
        ></i>
        {/* <button
          className="btn"
         
          
        >
          {" "}
          ADD TO CART
        </button> */}
      </div>
    </>
  );
};

export default ProductCard;
