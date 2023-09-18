import React from "react";
import "./entire.css";
import people from "./img/people.webp";
import { Link } from "react-router-dom";

const HeroSection = ({ mydata }) => {
  const { name } = mydata;
  return (
    <div className="container">
      <div className="text">
        <p className="welcome"> WELCOME TO</p>
        <h1 className="toptext"> {name}</h1>
        <p>
          {" "}
          I'm excited to introduce my new e-commerce project, <br />
          an online shopping platform designed to revolutionize your shopping
          experience <br />. With a wide range of products, seamless navigation
          , and user-friendly features, <br />
          we aim to make your online shopping journey convenient and enjoyable.
        </p>
        <button className="btn">
          {" "}
          <Link to="about"> SHOP NOW </Link>{" "}
        </button>
      </div>
      <div className="image">
        <img src={people} alt="people" className="people" />
      </div>
    </div>
  );
};
export default HeroSection;
