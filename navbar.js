import React from "react";
import Modal from "./cartModal";

function Navbar(props) {
  return (
    <div className="navBar">
      <div className="homePage">Home</div>
      <div className="aboutPage">About</div>
      <div className="shopPage">Shop</div>
      <button className="cartButton" onClick={() => props.cartClick()}>
        Cart<span>{props.cartItems.length}</span>
      </button>
      {props.show ? (
        <Modal
          setShow={props.setShow}
          cartItems={props.cartItems}
          setCartItems={props.setCartItems}
          removeFromCart={props.removeFromCart}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
