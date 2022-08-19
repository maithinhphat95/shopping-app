import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

CartItem.propTypes = {};

function CartItem(props) {
  const { cartItem } = props;
  console.log(cartItem);
  return (
    <div className="cart-selected-item">
      <div className="cart-selected-item-detail">
        <img src={cartItem.image} alt="" />
        <p>{cartItem.name}</p>
      </div>
      <div className="cart-selected-item-detail">
        <div className="item-count">
          <button>-</button>
          <input type="text" value={cartItem.count} />
          <button>+</button>
        </div>
        <div className="item-prices">$100</div>
        <button className="item-delete">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
