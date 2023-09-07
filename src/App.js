import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./component/home";

import About from "./component/about";
import Products from "./component/products";
import Contact from "./component/contact";
import ErrorPage from "./component/errorpage";
import Cart from "./component/cart";
import SingleProductPage from "./component/singleproduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />

          <Route path="cart" element={<Cart />} />
          <Route path="singleproduct" element={<SingleProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
