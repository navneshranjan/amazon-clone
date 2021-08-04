import React from "react";
import "./Checkout.css";
import { useStatevlaue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStatevlaue();

  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
        alt="Add"
      />
      {basket.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no item in your basket.To buy one or gift to soma one click
            on "Add To basket" next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title"> your Shopping basket</h2>
          {/* list out all checkout product */}
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
