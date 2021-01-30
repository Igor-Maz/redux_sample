import { CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT, ADD_BULK } from './actions';
import cartItems from "../cart-items";

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0
};

export const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case CLEAR_CART:
            return {
                ...state, cart: state.cart.map((cartItem) => ({ ...cartItem, amount: 0, isActive: true }))
            };
        case REMOVE:
            return {
                ...state, cart: state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        return cartItem = { ...cartItem, amount: 0, isActive: true }
                    }
                    return cartItem
                }
                )
            }
        case GET_TOTALS:
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;
                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;
                    return cartTotal;
                }, {
                total: 0,
                amount: 0
            });
            total = parseFloat(total.toFixed(2))
            return { ...state, total, amount }
        case TOGGLE_AMOUNT:
            return {
                ...state, cart: state.cart.map(cartItem => {
                    if (cartItem.id === action.payload.id) {
                        if (action.payload.toggle === 'inc') {
                            return cartItem = { ...cartItem, amount: cartItem.amount + 1, isActive: false };
                        }
                        if (action.payload.toggle === 'dec') {
                            let tempItem = { ...cartItem, amount: cartItem.amount - 1 }
                            if (tempItem.amount > 0) {
                                return tempItem
                            } else {
                                return tempItem = { ...tempItem, isActive: true };
                            }
                        }
                    }
                    return cartItem
                })
            }
            case ADD_BULK:
                let tempCart = state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        cartItem = { ...cartItem, amount: cartItem.amount + parseInt(action.payload.bulk) }
                    }
                    return cartItem;
                })
                return { ...state, cart: tempCart }
        default:
            return state;
    }
}
