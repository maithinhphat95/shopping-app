import * as actionType from "./shopping-types";
// Add the product to cart action
export const addToCart = (productId) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      productId: productId,
    },
  };
};
// Increase the quantity of product in the cart
export const increaseQuantity = (productId) => {
  return {
    type: actionType.INCREASE,
    payload: {
      productId: productId,
    },
  };
};
// Increase the quantity of product in the cart
export const decreaseQuantity = (productId) => {
  return {
    type: actionType.DECREASE,
    payload: {
      productId: productId,
    },
  };
};
