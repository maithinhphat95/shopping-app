import React, { useState, createContext } from "react";
// Use useContext hook

const ShowCartContext = createContext(); // Return an object

// Component provider
function ShowCartProvider({ children }) {
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
}

export { ShowCartContext, ShowCartProvider };
