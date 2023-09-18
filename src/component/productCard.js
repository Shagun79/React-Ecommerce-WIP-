import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Headers from "./header";

const ProductCard = ({ id, name, image, price, category }) => {
  return (
    <>
      <Link to={`/singleproduct/${id}`}>
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
        <button className="btn"> ADD TO CART</button>
      </Link>
    </>
  );
};

export default ProductCard;
