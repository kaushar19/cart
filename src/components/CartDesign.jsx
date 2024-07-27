import React from "react";
import "./cartdesign.css";
import { cartText } from "../data/carttext";
function CartDesign() {
  return (
    <>
      <div className="container">
        {cartText.map((v, i) => {
          return <CartItems item={v} key={i} />;
        })}
      </div>
    </>
  );
}

export default CartDesign;

function CartItems({ item }) {
  return (
    <>
      <div className="cart">
        <div className="cartImg">
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="cartTitle">
          <div className="cartName">
            <p>{item.name}</p>
            <div className="d-flex  justify-content-between">
              <p className="price">{item.price}</p>
              <p className="cartoffer">{item.offer}</p>
            </div>
          </div>
          <div className="cartBtn ">
            <button className="btn  add btn-sm">ADD TO CART</button>
            <button className="btn buy  btn-sm">BYU NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}
