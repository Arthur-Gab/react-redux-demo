import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	incrementByAmount,
	decrementByAmount,
	selectCount,
} from './counterSlice';

const Counter = () => {
	const counter = useSelector(selectCount);
	const dispatch = useDispatch();

	const increaseByAmount = () => {
		dispatch(incrementByAmount(5));
	};
	const incrementCounter = () => {
		dispatch(increment());
	};
	const decrementCounter = () => {
		dispatch(decrement());
	};
	const decreaseByAmount = () => {
		dispatch(decrementByAmount(5));
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<button onClick={increaseByAmount}>Increment By 5</button>
			<button onClick={incrementCounter}>Increment</button>
			<button onClick={decrementCounter}>Decrement</button>
			<button onClick={decreaseByAmount}>Decrement By 5</button>
		</main>
	);
};

export default Counter;
