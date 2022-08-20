import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./Product-item/";
import "./style.scss";
ProductList.propTypes = {};

function ProductList(props) {
  const { list, handleAddCart } = props;
  return (
    <div className="product-container">
      <p>
        Total: <span>{list.length} products</span>
      </p>
      <div className="product-list">
        {list.map((item) => (
          <ProductItem
            key={item.id}
            product={item}
            handleAddCart={handleAddCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
