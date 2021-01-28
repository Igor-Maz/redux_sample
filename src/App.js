import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import store from './redux/store';
import {Provider} from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer />
    </Provider>
  );
}

export default App;
