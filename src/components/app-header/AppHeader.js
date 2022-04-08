import logo from './img/logo.png';
import './app-header.scss';

function AppHeader() {
	return (
		<header className="app-header">
			<img src={logo} className="app-header__logo" alt="logo" />
			<h1 className="app-header__heading">Todos</h1>
		</header>
	);
}

export default AppHeader;