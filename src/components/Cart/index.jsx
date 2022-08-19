import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./Cart-item";
Cart.propTypes = {};

function Cart(props) {
  // Props
  const { display, handleClickShowCart, cartList } = props;

  const cartWidth = display ? 500 : 0;

  return (
    <div className="cart " style={{ width: cartWidth }}>
      <div className="cart-header">
        <button
          onClick={() => {
            handleClickShowCart(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p>Your Shopping Cart</p>
        <div className="cart-number">6</div>
      </div>
      <div className="cart-selected">
        {cartList.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
