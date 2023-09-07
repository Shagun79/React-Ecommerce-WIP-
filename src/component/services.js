import React from "react";
import superfast from "./img/delivery.png";
import contactless from "./img/contactless.png";
import moneyback from "./img/money back.webp";
import supersecure from "./img/secure.png"

const Service = () => {
  return (
    <>
      <div className="services-main">
        <div className="box-one">
          <img
            src={superfast}
            alt="super fast delivery"
            className="icon"
          />
          <p className="para"> Super Fast and Free Delivery</p>
        </div>
        <div className="box-two">
          <div className="top">
            <img src={contactless} alt="contactless" className="icon" />
            <p className="para"> Non-contact Shipping</p>
          </div>

          <div className="bottom">
            <img src={moneyback} alt="moneyback" className="icon" />
            <p className="para"> Money-back Guarnteed</p>
          </div>
        </div>

        <div className="box-three">
        <img
            src={supersecure}
            alt="super fast delivery"
            className="icon"
          />
          <p className="para"> Super Secure Payment System</p>



        </div>
      </div>
    </>
  );
};

export default Service;
