import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CreatProduct.propTypes = {};

function CreatProduct(props) {
  const { handleCreatProduct } = props;

  return (
    <div className="nav-item">
      <Link to="/shopping-app/create-product" className="nav-item-link">
        <button type="">Creat A New Product</button>
      </Link>
    </div>
  );
}

export default CreatProduct;
