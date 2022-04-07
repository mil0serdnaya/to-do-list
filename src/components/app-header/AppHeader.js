import logo from './img/logo.png';
import './app-header.scss';

const AppHeader = () => {
	return (
		<header className="app-header">
			<img src={logo} className="app-logo" alt="logo" />
			<h1 className="app-header__heading">Todos</h1>
		</header>
	);
}

export default AppHeader;