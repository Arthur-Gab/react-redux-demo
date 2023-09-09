import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterSlice';
import authReducer from '../components/Auth/authSlice';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
	},
});

export default store;
