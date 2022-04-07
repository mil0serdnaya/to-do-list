import logo from './img/panther.png';
import './app-header.scss';

const AppHeader = () => {
	return(
		<header className="app-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1>To-Do list</h1>
		</header>
	);
}

export default AppHeader;