import React from "react";
import furniture from "../assests/furniture.jpg";
import furniture1 from "../assests/furniture1.jpg";

function Product() {
  return (
    <body id="csss">
      <div>
        <div className="header">List Of Furnitures</div>

        <div className="flex-container">
          <div className="product-button">
            <button>Chairs</button>
            <button>Tables</button>
            <button>Almirah</button>
            <button>All Categories</button>
          </div>
          </div>

          <div className="product-images">
            
            <img
              src={furniture} alt="img1"
            
            />
            <img
              src={furniture1} alt="img2"
            
            />
            <img
              src={furniture1} alt="img3"
          
            />
             <img
              src={furniture} alt="img4"
            
            />
            
           
            </div>

       

          {/* <div className="products">
            <button>Chairs</button>
            <button>Tables</button>
            <button>Almirah</button>
            <button>All Categories</button>
          </div>
          <div className="product-images">
            <img
              src={furniture} alt="img1"
            
            />
            <img
              src={furniture1} alt="img2"
            
            />
            <img
              src={furniture1} alt="img3"
          
            />
          </div>
        </div> */}
        
      </div>
    </body>
  );
}

export default Product;
