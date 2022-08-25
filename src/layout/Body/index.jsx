import React, { useEffect, useState, useContext } from "react";
import CartBtn from "../../components/Cart-btn";
import ProductList from "../../components/Product-list";
import { httpRequest, dataStorage } from "../../constant";
import productApi from "../../APIs/productApi";
import ToTopBtn from "../../components/ToTopBtn";
import Cart from "../../components/Cart";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddProduct from "../../components/AddProduct";
import "./style.scss";

function Body() {
  // Init the url variable
  const [dataProduct, userProduct] = dataStorage;
  // hook
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [toTop, setToTop] = useState(false);
  const [deps, setDeps] = useState(false);
  const navigate = useNavigate();
  // Fetch product list with Axios API
  // Get:
  useEffect(() => {
    // let list = productApi.getAll().data;
    // setProductList(list);
    httpRequest
      .get(dataProduct)
      .then((response) => setProductList(response.data));
  }, []);
  // Post:
  const postProduct = (item) => {
    httpRequest
      .post(dataProduct, item)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    let newList = [...productList, item];
    setProductList(newList);
    navigate("/shopping-app");
  };

  // Fetch cart list with Axios API
  // Get:
  useEffect(() => {
    httpRequest
      .get(userProduct)
      .then((response) => {
        setCartList(response.data);
      })
      .catch((error) => console.log(error));
  }, [deps]);
  // Post:
  const postCart = (item) => {
    httpRequest
      .post(userProduct, item)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
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

  // Function add product to Cart
  const handleAddCart = (item) => {
    let count = 1;
    let newItem = { ...item, count: count };

    if (cartList.every((element) => element.id != item.id)) {
      // Add a new product to cart list
      setCartList([...cartList, newItem]);
      postCart(newItem);
      setDeps(!deps);
    } else {
      // Update the cart list with increase count
      let carItem = cartList.find((e) => e.id == item.id);
      putCart(carItem, "increase");
      setDeps(!deps);
    }
    // Thêm product to card list nhưng chưa post API (redux), xíu làm việc mới midleware
  };

  // Handle update cart (count, delete)
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
      <Routes>
        <Route
          path="/shopping-app/products"
          element={
            <ProductList list={productList} handleAddCart={handleAddCart} />
          }
        />
        <Route
          path="/shopping-app/products/add"
          element={
            <AddProduct productList={productList} handlePost={postProduct} />
          }
        />
      </Routes>

      <CartBtn />
      <Cart cartList={cartList} updateCart={updateCart} />
      {toTop && <ToTopBtn handleToTop={handleToTop} />}
    </div>
  );
}

export default Body;
