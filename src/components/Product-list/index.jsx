import React, { useEffect, useState } from "react";
import ProductItem from "./Product-item/";
import "./style.scss";
import productApi from "../../APIs/productApi";
function ProductList(props) {
  const { list, handleAddCart } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
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
