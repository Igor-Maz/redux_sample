export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';
export const ADD_BULK = 'ADD_BULK';

export const removeItem = (id) => {
    return { type: REMOVE, payload: { id } }
}

export const addBulk = (id, bulk) => (dispatch) => {
    setTimeout(()=>{
        dispatch({type: ADD_BULK, payload: { id, bulk }})
    }, 2000)
}
