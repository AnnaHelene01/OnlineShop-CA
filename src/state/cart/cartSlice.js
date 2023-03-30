import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  total: 0,
  totalAmount: 0,
};


export const cartSlice = createSlice({
  // The name of our reducer
  name: 'cart',
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
      state.totalAmount = 0;
    },
    addProduct: (state, action) => {
        state.totalAmount += 1;
        //If item exist in cart
        let isFound = state.products.some((product) => {
            if (product.id === action.payload.id) {
                return true;
            }
            return false;    
        })
        //Do not add, but increase number and price
        if (isFound) {
            let x = state.products.findIndex (
              (product) => product.id === action.payload.id
            );
            state.products[x].amount += 1;
            state.total = state.total + action.payload.price;
          } else {
            state.products.push(action.payload);
            state.total = state.total + action.payload.price;
          }

    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((product) => product.id !== productId)
    },
    decreaseProduct: (state, action) => {
      const productId = action.payload.id;
    
      // Find the index of the product in the array
      const productIndex = state.products.findIndex(product => product.id === productId);
    
      // Decrease the amount of the product if it exists in the cart
      if (productIndex !== -1) {
        const product = state.products[productIndex];
    
        // If the product has only one item, remove it from the cart
        if (product.amount === 1) {
          state.products.splice(productIndex, 1);
        } else {
          product.amount -= 1;
        }
    
        state.totalAmount -= 1;
        state.total -= product.price;
      }
    },
  },
});

export const { clearCart, addProduct, removeProduct, decreaseProduct } = cartSlice.actions;

export default cartSlice.reducer;
