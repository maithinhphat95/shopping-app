import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
Cart.propTypes = {};

function Cart(props) {
  // Hook
  const [close, setClose] = useState("none");
  const handleCloseCart = () => {
    setClose(true);
  };
  return (
    <div className="cart">
      <div className="cart-header">
        <button
          onClick={() => {
            handleCloseCart();
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p>Your Shopping Cart</p>
        <div className="cart-number">6</div>
      </div>
      <div className="cart-selected">
        <div className="cart-selected-item">
          <div className="cart-selected-item-detail">
            <img
              src="https://cf.shopee.vn/file/e9e083e6117181cdb7a355e1e5c9efcc"
              alt=""
            />
            <p>Name</p>
          </div>
          <div className="cart-selected-item-detail">
            <div className="item-count">
              <button>-</button>
              <input type="text" defaultValue={1} />
              <button>+</button>
            </div>
            <div className="item-prices">$100</div>
            <button className="item-delete">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
        <div className="cart-selected-item">1</div>
        <div className="cart-selected-item">1</div>
      </div>
    </div>
  );
}

export default Cart;
