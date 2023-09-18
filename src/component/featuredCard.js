import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Headers from "./header";

const FeaturedCard = ({ id, name, image, price, category }) => {
  return (
    <>
      <Link to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={image} alt={name} className="api-image" />
            <figcaption className="caption"> {category} </figcaption>
          </figure>
         
        
        </div>

        <div className="card-data">
          <div className="card-data-flex">
            <h3> {name}</h3>
            <p className="card-data-price"> {price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FeaturedCard;
