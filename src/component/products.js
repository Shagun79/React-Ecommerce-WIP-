import React, { useContext , useState} from "react";
import { AppContext } from "./contextAPI";
import Header from "./header";
import ProductCard from "./productCard";
import Cart from "./cart";


const Products = () => {
  const {resJson } = useContext(AppContext);

  const [cart, setCart] = useState([]);
 

  const handleClick = (data) => {
    console.log("sajal", data);
    setCart((prevdata) => {
      return [...prevdata, data];
    });
  };

 
  

  return (
    <>
      <Header size={cart.length} />
      <div className="AllProducts">
        {resJson.map((data, id) => {
          return <ProductCard data={data} handleClick={handleClick} />;
        })}
      </div>

      <Cart cart={cart}/>
    </>
  );
      }


export default Products;
