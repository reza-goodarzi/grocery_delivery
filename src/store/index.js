import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productSlice from './productsSlice';

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		products: productSlice.reducer,
	}
});
