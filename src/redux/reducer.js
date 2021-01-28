// import { combineReducers } from "redux";
import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from './actions';
import cartItems from "../cart-items";

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0
};

export const reducer = (state = initialStore, action) => {
    console.log('log z reducera:', { state, action });
    let tempCart = []
    switch (action.type) {
        case CLEAR_CART:
            return { ...state, cart: [] };
        case REMOVE:
            console.log('remove action', action.payload.id);
            return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id) }
        case DECREASE:
            console.log('decrease action');
            if (action.payload.amount === 1) {
                tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
            } else {
                tempCart = state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                    };
                    return cartItem;
                });
            }
            return { ...state, cart: tempCart }
        case INCREASE:
            console.log('increase action');
            tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    cartItem = { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem;
            })
            return { ...state, cart: tempCart }
        case GET_TOTALS:
            console.log('totals action')
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const {price, amount} = cartItem;
                    const itemTotal = price * amount;
                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;
                    return cartTotal;
                }, {
                total: 0,
                amount: 0
            });
            total = parseFloat(total.toFixed(2))
            return {...state, total, amount}
        default:
            return state;
    }
}

// export default combineReducers({counter})
