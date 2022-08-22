import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CreatProductBtn.propTypes = {};

function CreatProductBtn(props) {
  return (
    <div className="nav-item">
      <Link to="/shopping-app/products/add" className="nav-item-link">
        <button type="">Creat A New Product</button>
      </Link>
    </div>
  );
}

export default CreatProductBtn;
