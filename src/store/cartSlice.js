import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalQuantity: 0,
		discount: 1,
	},
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);

			state.totalQuantity++;

			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					name: newItem.name,
					price: newItem.price,
					image: newItem.image,
					quantity: 1,
					totalPrice: newItem.price,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find(item => item.id === id);

			state.totalQuantity--;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter(item => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		},
		setDiscount(state, { payload }) {
			if (payload >= 1) return;
			state.discount = 1 - payload;
		}
	}
});

export const { addItemToCart, removeItemFromCart, setDiscount } = cartSlice.actions;

export default cartSlice;

