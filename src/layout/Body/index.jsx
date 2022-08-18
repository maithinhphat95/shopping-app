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
  const [showCart, setShowCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    // Fetch API with Axios
    httpRequest().then((response) => {
      setProductList(response.data);
    });
  }, []);

  // Init the list of item on cart

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
      setCartList([...cartList, newItem]);
    } else {
      // update the CartList with increase count
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
