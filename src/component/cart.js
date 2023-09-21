import React from "react";
import Header from "./header";

const Cart = ( {cart}) => {
  console.log(cart, "cart")
  

  return (
    <>
      <Header />
      <h1>Sajal</h1>
      { cart.map((currentElm, index) => {
        return (
          <div className="cart-box" key={index}>
            <div className="cart-img">
              <img src={currentElm.image} alt={currentElm.title} />
              <p>{currentElm.title}</p>
            </div>
            <div className="increment-decrement">
              <button>+</button>
              <button>-</button>
            </div>
            <div>
              <span>{currentElm.price}</span>
              <button>Remove</button>
            </div>
          </div>
        );
      })} 
      {<div>
        <span>Total Price of your Cart</span>
        <span>Rs - {cart.reduce((total, item) => total + item.price, 0)}</span>
      </div> }
    </>
  );
};

export default Cart;
