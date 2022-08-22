import React, { useContext } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShowCartContext } from "../../Provider";

CartBtn.propTypes = {};

function CartBtn() {
  const context = useContext(ShowCartContext);

  return (
    <button
      className="cart-btn"
      onClick={() => {
        context.handleClickShowCart(true);
      }}
    >
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
}

export default CartBtn;
