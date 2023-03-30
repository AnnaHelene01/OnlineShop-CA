import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    // This is the store we created above. We can add more than one store,
    // allowing for our app to scale if needed
    cart: cartReducer,
  },
});