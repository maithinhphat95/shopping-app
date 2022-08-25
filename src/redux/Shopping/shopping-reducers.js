import * as actionType from "./shopping-types";

const INITIAL_STATE = {
  products: [],
  cart: [],
};


const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      // Check item dât from product list
      const item = state.products.find(
        (product) => product.id === action.payload.productId
      );

      // Check if item is in cart already
      const inCart = state.cart.find((product) =>
        product.id === action.payload.productId ? true : false
      );
      let cart = [];
      if (inCart) {
        cart = state.cart.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        cart = [...state.cart, { ...item, quantity: 1 }];
      }
      return {
        ...state,
        cart: cart,
      };
      break;

    default:
      return state;
      break;
  }
};
export default shopReducer;
