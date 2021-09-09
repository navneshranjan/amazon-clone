import React from "react";
import "./Product.css";
import { useStatevlaue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  // call the store
  const [{ basket }, dispatch] = useStatevlaue();
  const addTobasket = () => {
    // Add item to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
      </div>

      <img src={image} alt="Book" />
      <button onClick={addTobasket}>Add to basket</button>
    </div>
  );
}

export default Product;
