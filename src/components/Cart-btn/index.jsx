import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

CartBtn.propTypes = {};

function CartBtn(props) {
  return (
    <div className="cart-btn">
      <button>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
}

export default CartBtn;
