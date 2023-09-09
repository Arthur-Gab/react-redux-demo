import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLogged: false,
};

const authSlice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		login(state) {
			state.isLogged = true;
		},
		logout(state) {
			state.isLogged = false;
		},
	},
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth.isLogged;

export default authSlice.reducer;
