import React from "react";
import PropTypes from "prop-types";

CartItem.propTypes = {};

function CartItem(props) {
  return (
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
  );
}

export default CartItem;
