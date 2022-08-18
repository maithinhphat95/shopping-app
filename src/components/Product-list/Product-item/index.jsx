import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

ProductItem.propTypes = {};

function ProductItem(props) {
  const { product } = props;
  console.log(product);
  return (
    <div className="product-item">
      <img
        className="product-item-img"
        src={product.image}
        alt={product.name}
        title={product.name}
      />
      <div className="product-item-detail">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
