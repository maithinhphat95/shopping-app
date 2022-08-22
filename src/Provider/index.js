import React, { useEffect, useState, createContext } from "react";
// Use useContext hook
const ShowCartContext = createContext(); // Return an object
const ShowCartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  // Function show the Cart
  const handleClickShowCart = (value) => {
    setShowCart(value);
  };
  const cart = {
    showCart,
    handleClickShowCart,
  };
  console.log(cart);
  return (
    <ShowCartContext.Provider value={cart}>{children}</ShowCartContext.Provider>
  );
};
export { ShowCartContext, ShowCartProvider };
