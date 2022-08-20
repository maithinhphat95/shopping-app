import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

CartBtn.propTypes = {};

function CartBtn(props) {
  const { handleClickShowCart } = props;
  return (
    <button
      className="cart-btn"
      onClick={() => {
        handleClickShowCart(true);
      }}
    >
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
}

export default CartBtn;
