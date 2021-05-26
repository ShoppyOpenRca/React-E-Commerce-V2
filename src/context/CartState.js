import React, { useReducer } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import {
INCREMENT_CART,
DECREMENT_CART,
REMOVE_CART,
CLEAR_CART,
TOTAL_CART,
CART_TAX,
CART_SUB_TOTAL
} from '../types';

const CartState= props => {
    const initialState = {
        carts: [],
    }


    return (
        <CartContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            increment,
            decrement,
            clearCart,
            removeCart,
            totalCart,
            cart
            
        }}
        >
            {props.children}
        </CartContext.Provider>
    )
};
export default CartState;