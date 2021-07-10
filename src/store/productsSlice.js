import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_DATA } from "../data/DummyData";

// extract items data in one array
const data = DUMMY_DATA.map((data) => {
	return data.items;
}).flat();

const resultPerPage = 10;

const productSlice = createSlice({
	name: 'products',
	initialState: {
		query: '',
		result: data.length,
		items: [...data.slice(0, resultPerPage)],
		page: 1,
		finished: data.length <= resultPerPage
	},
	reducers: {
		loadMore(state) {
			if (state.finished) return;

			const page = state.page;
			const start = page * resultPerPage;
			const end = (page + 1) * resultPerPage;

			const newItems = data.slice(start, end);

			state.items = [...state.items, ...newItems];
			state.page++;

			state.finished = state.result === state.items.length;
		}
	}
});

export const { loadMore } = productSlice.actions;
export default productSlice;