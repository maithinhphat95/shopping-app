import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./Product-item/";
import "./style.scss";
ProductList.propTypes = {};

function ProductList(props) {
  const { list, handleAddProduct } = props;
  return (
    <div className="product-container">
      <p>
        Total: <span>{list.length} product</span>
      </p>
      <div className="product-list">
        {list.map((item) => (
          <ProductItem
            key={item.id}
            product={item}
            handleAddProduct={handleAddProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
