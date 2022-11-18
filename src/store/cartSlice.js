import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            name: 'apple',
            price: 200,        
        },
        {
            name: 'bannana',
            price: 40,        
        },
        {
            name: 'orange',
            price: 100,        
        }
    ],
    cart: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.total = state.total + action.payload;
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;