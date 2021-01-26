// import { combineReducers } from "redux";
// import { DECREASE, INCREASE } from './actions';
import cartItems from "../cart-items";

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 5
};

export const reducer = (state = initialStore, action) => {
    console.log('log z reducera:', { state, action });
    switch (action.type) {
        // case DECREASE:
        //     return { count: state.count - 1 }
        // case INCREASE:
        //     return { count: state.count + 1 }
        default:
            return state;
    }
}

// export default combineReducers({counter})
