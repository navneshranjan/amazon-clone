import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct(price, rating, image, id, title) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
