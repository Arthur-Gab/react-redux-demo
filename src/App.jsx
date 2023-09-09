import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import { selectAuth } from './components/Auth/AuthReducer.slice';

function App() {
	const userAuth = useSelector(selectAuth);

	return (
		<>
			<Header />
			{!userAuth && <Auth />}
			{userAuth && <UserProfile />}
			<Counter />
		</>
	);
}

export default App;