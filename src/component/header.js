import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./entire.css";
import logo from "./img/logomain.jpeg";

const Header = (props) => {

  
  return (
    <>
      <div className="Navbar">
        <ul>
          <div>
            <img src={logo} alt="Ecomm" className="logo" />
          </div>
          <li>
            <Link to="/" className="active">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About </Link>
          </li>
          <li>
            {" "}
            <Link to="/products"> Products </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact </Link>
          </li>
          <li className="cart">
            {/* Link to the cart page */}
            <Link to="/cart">
              Cart <i className="fa fa-shopping-cart"></i> ({props.size})
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/cart" className="login">
              {" "}
              Log in{" "}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
