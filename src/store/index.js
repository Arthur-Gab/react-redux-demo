import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterReducer.slice';
import authReducer from '../components/Auth/AuthReducer.slice';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
	},
});

export default store;
