import React from "react";
import "./Product.css";




function Product({ id, title, price , image  }) {

  
  // eslint-disable-next-line no-empty-pattern



  
  return (
    <div className="product">
      <div className="product_info">
        <h3 >{title}</h3>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
       
      </div>

      <img src={image} alt="" />
      {/* <p>{description}</p> */}
      <button >Add to basket</button>
    </div>
  );
}

export default Product;
