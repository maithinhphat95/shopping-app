import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CartBtn from "../../components/Cart-btn";
import ProductList from "../../components/Product-list";
import { httpRequest } from "../../constant";
import "./style.scss";
import Cart from "../../components/Cart";

Body.propTypes = {};

function Body(props) {
  // hook
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    // Fetch API with Axios
    httpRequest().then((response) => {
      setProductList(response.data);
    });
  }, []);

  return (
    <div className="body">
      <ProductList list={productList} />
      <CartBtn />
      <Cart />
    </div>
  );
}

export default Body;
