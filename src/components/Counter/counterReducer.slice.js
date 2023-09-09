import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			// console.log('before', current(state));

			state.value++;

			// console.log('after', current(state));
		},
		decrement(state) {
			// console.log('before', current(state));

			state.value--;

			// console.log('after', current(state));
		},
		incrementByAmount(state, action) {
			// console.log('before', current(state));

			state.value += action.payload;

			// console.log('after', current(state));
		},
		decrementByAmount(state, action) {
			// console.log('before', current(state));

			state.value -= action.payload;

			// console.log('after', current(state));
		},
	},
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
	counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
