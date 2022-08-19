import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

CartItem.propTypes = {};

function CartItem(props) {
  const { cartItem, updateCart } = props;
  const updateCartProduct = (action, item) => {
    updateCart(action, item);
  };
  let price = cartItem.price * cartItem.count;
  return (
    <div className="cart-selected-item">
      <div className="cart-selected-item-detail">
        <img src={cartItem.image} alt="" />
        <p>{cartItem.name}</p>
      </div>
      <div className="cart-selected-item-detail">
        <div className="item-count">
          <button
            onClick={() => {
              updateCartProduct("decrease", cartItem);
            }}
          >
            -
          </button>
          <input
            type="text"
            value={cartItem.count}
            onChange={(e) => {
              updateCartProduct(e.target.value, cartItem);
            }}
          />
          <button
            onClick={() => {
              updateCartProduct("increase", cartItem);
            }}
          >
            +
          </button>
        </div>
        <div className="item-prices">${price}</div>
        <button
          className="item-delete"
          onClick={() => {
            updateCartProduct("delete", cartItem);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
