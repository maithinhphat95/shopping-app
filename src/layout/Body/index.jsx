import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CartBtn from "../../components/Cart-btn";
import ProductList from "../../components/Product-list";
import { httpRequest, dataStorage } from "../../constant";
import ToTopBtn from "../../components/ToTopBtn";
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
  const [toTop, setToTop] = useState(false);
  const [deps, setDeps] = useState(false);

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
    console.log(cartList);
  }, [deps]);
  // Post:
  const postCart = (item) => {
    httpRequest
      .post(userProduct, item)
      .then((response) => console.log(response.data));
  };
  // Put:
  const putCart = (item, action) => {
    action == "increase"
      ? item.count++
      : action == "decrease"
      ? item.count--
      : (item.count = action);
    httpRequest.put(`${userProduct}/${item.id}`, {
      ...item,
    });
  };

  // Dom event scroll
  useEffect(() => {
    const handleScroll = () => {
      setToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup event function: componentDidUnmount()
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle show to top button
  let handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function show the Cart
  const handleClickShowCart = (value) => {
    setShowCart(value);
  };

  // Function add product to Cart
  const handleAddProduct = (item) => {
    let count = 1;
    let newItem = { ...item, count: count };

    if (cartList.every((element) => element.id != item.id)) {
      // Add a new product to cart list
      setCartList([...cartList, newItem]);
      postCart(newItem);
    } else {
      // Update the cart list with increase count
      let carItem = cartList.find((e) => e.id == item.id);
      putCart(carItem, "increase");
      setDeps(!deps);
    }
  };

  const updateCart = (action, cartItem) => {
    if (action === "increase") {
      // code handle increase count
      putCart(cartItem, action);
      setDeps(!deps);
    } else if (action === "decrease") {
      // code handle decrease count
      if (cartItem.count > 1) {
        putCart(cartItem, action);
        setDeps(!deps);
      }
    } else if (action === "delete") {
      // code handle delete cartItem
      httpRequest.delete(`${userProduct}/${cartItem.id}`);
      setDeps(!deps);
    } else {
      // code handle input count value
      putCart(cartItem, action);
      setDeps(!deps);
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
        updateCart={updateCart}
      />
      {toTop && <ToTopBtn handleToTop={handleToTop} />}
    </div>
  );
}

export default Body;
