import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    const Height = 13;
  return (
    
    <>
      <Header />
      <div className="error-page">
        <h2> UH OH1 You' re lost </h2>
        <p> The page you are looking for does not exist. <br/> How you got here is a 
            mystery. But you can click the button below  to go back to the homepage.
        </p>
        <button  className="error-home">  
            <Link to="/" >  Home </Link>
            </button>
      </div>
      <Footer  height={Height}/>
    </>
  );
};
export default ErrorPage;
