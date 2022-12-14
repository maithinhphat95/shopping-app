import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./Cart-item";
import { ShowCartContext } from "../../Provider";

Cart.propTypes = {};

function Cart(props) {
  // Props
  const { cartList, updateCart } = props;
  // Hook
  const context = useContext(ShowCartContext);
  // Init variable
  let total = 0;
  let priceList = [];
  try {
    priceList = cartList == [] ? [] : cartList.map((e) => e.price * e.count);
    total =
      priceList == []
        ? 0
        : priceList.reduce((total, current) => total + current);
  } catch (error) {}

  return (
    <div className="cart " style={{ width: context.showCart ? 500 : 0 }}>
      <div className="cart-header">
        <button
          onClick={() => {
            context.handleClickShowCart(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p>Your Shopping Cart</p>
        <div className="cart-number">{cartList.length}</div>
      </div>
      <div className="cart-selected">
        {cartList.map((item) => (
          <CartItem key={item.id} cartItem={item} updateCart={updateCart} />
        ))}
        <div className="cart-selected-total">
          <p>
            Subtotal: <b>$ {total || 0}</b>
          </p>
          <button>Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
