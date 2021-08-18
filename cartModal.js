import CartCard from "./cartcard";
import { useState } from "react";

function Modal(props) {
  let [total, SetTotal] = useState(0);
  let prices = props.cartItems.map((el) => el.price);
  if(props.cartItems.length >= 1){
  let reducer = (acc, curr) => +acc + +curr;
  total = prices.reduce(reducer);
  }
  return (
    <>
      <div className="modal-background" onClick={() => props.setShow(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => props.setShow(false)} className="cartCloseButton">X</button>
          <div className="modal-title">Your Cart</div>
          <div className="modal-body">
            {props.cartItems.map((item) => {
              return <CartCard item={item} removeFromCart={props.removeFromCart}/>;
            })}
          </div>
          <div className="modal-footer"> Your Cart Total: ${total}</div>
          
        </div>
      </div>
    </>
  );
}

export default Modal;
