import React, { useReducer } from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: null,
  count: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        count: action.payload.events.length,
      };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addEventToCart(event) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        events: [],
        totalPrice: 0,
      };
    }
    let newEvent = {
      item: event,
      count: 1,
      subPrice: event.price,
    };
    let isEventInCart = cart.events.some((item) => item.item.id === event.id);
    // console.log(isEventInCart);
    if (isEventInCart) {
      cart.events = cart.events.filter((item) => item.item.id !== event.id);
    } else {
      cart.events.push(newEvent);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(cart);
    // console.log(event);
    getCart();
  }
  function checkEventInCart(event) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        events: [],
        totalPrice: 0,
      };
    }
    let isEventInCart = cart.events.some((item) => item.item.id === event.id);
    return isEventInCart;
  }
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        events: [],
        totalPrice: 0,
      };
    }
    cart.totalPrice = cart.events.reduce((prev, curr) => {
      return prev + curr.subPrice;
    }, 0);

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  function changeEventCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.events = cart.events.map((item) => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = item.count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.events = cart.events.filter((item) => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        count: state.count,
        addEventToCart,
        checkEventInCart,
        getCart,
        changeEventCount,
        deleteFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
