import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth } from '../Auth/AuthReducer.slice';

const Header = () => {
	const dispatch = useDispatch();
	const userAuth = useSelector(selectAuth);

	function handlerUserLogOut() {
		dispatch(logout());
	}

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{userAuth && (
						<>
							<li>
								<a href="/">My Products</a>
							</li>
							<li>
								<a href="/">My Sales</a>
							</li>
							<li>
								<button onClick={handlerUserLogOut}>Logout</button>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
