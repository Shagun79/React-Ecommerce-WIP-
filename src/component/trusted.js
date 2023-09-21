import React from "react";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";

const Trusted = () => {
  return (

    <>
    <div className="TRUSTED">
      <h3> Trusted by 1000+ companies</h3>
      <div className="trusted-main">

     
        <div className="item-one"  >
           <div>
           <img src={img1} alt="1" className="horozintal-row" />
           </div>
           <div>
           <p>Text 1</p>
           </div>
         
        </div>
        <div className="item">
            <div>
            <img src={img2} alt="2" className="horozintal-row" />

            </div>
            <div>
            <p>Zeina</p>
            </div>
        
         
        </div>
        <div className="item">
          <div>
          <img src={img3} alt="3" className="horozintal-row" />
          </div>
          <div>
        
          </div>
        
        
        </div>
        <div className="item">
          <div>
          <img src={img4} alt="4" className="horozintal-row" />
          </div>
          <div>
          <p>Logic +</p>
          </div>
         
         
        </div>
        <div className="item">
          <div>
          <img src={img5} alt="5" className="horozintal-row" />
          </div>
          <div>
      
          </div>
         
       
        </div>
      </div>
      </div>
    </>
  );
};
export default Trusted;
