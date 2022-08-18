import React from "react";
import PropTypes from "prop-types";
import CartBtn from "../../components/Cart-btn";
import ProductList from "../../components/Product-list";
import "./style.scss";

Body.propTypes = {};

function Body(props) {
  return (
    <div className="body">
      <ProductList />
      <CartBtn />
    </div>
  );
}

export default Body;
