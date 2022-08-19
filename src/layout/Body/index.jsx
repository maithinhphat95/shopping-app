import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CartBtn from "../../components/Cart-btn";
import ProductList from "../../components/Product-list";
import { httpRequest, dataStorage } from "../../constant";
import "./style.scss";
import Cart from "../../components/Cart";

Body.propTypes = {};

function Body(props) {
  // Init the url variable
  const [dataProduct, userProduct] = dataStorage;
  // hook
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch product list with Axios API
  // Get:
  useEffect(() => {
    httpRequest.get(dataProduct).then((response) => {
      setProductList(response.data);
    });
  }, []);
  // Post:
  const postProduct = (item) => {
    httpRequest
      .post(dataProduct, item)
      .then((response) => console.log(response.data));
  };

  // Fetch cart list with Axios API
  // Get:
  useEffect(() => {
    httpRequest.get(userProduct).then((response) => {
      setCartList(response.data);
    });
  }, []);
  // Post:
  const postCart = (item) => {
    httpRequest
      .post(userProduct, item)
      .then((response) => console.log(response.data));
  };

  // Function show the Cart
  const handleClickShowCart = (value) => {
    setShowCart(value);
  };

  // Function add product to Cart
  const handleAddProduct = (item) => {
    let count = 1;
    let newItem = { ...item, count: count };

    console.log(cartList.every((element) => element.id != item.id));

    if (cartList.every((element) => element.id != item.id)) {
      // Add a new product to cart list
      setCartList([...cartList, newItem]);
      postCart(newItem);
    } else {
      // Update the cart list with increase count
    }
  };
  return (
    <div className="body">
      <ProductList list={productList} handleAddProduct={handleAddProduct} />
      <CartBtn handleClickShowCart={handleClickShowCart} />
      <Cart
        display={showCart}
        handleClickShowCart={handleClickShowCart}
        cartList={cartList}
      />
    </div>
  );
}

export default Body;
