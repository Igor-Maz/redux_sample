import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import store from './redux/store';
import {Provider} from 'react-redux';
// import { DECREASE, INCREASE } from './redux/actions';

// store.dispatch({type: DECREASE})
// console.log(store.getState());
// store.dispatch({type: INCREASE})
// console.log(store.getState());
// store.dispatch({type: INCREASE})
// console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
