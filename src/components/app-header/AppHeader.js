import logo from './img/logo.png';
import './app-header.scss';

const AppHeader = () => {
	return (
		<header className="app-header">
			<p className="hint hint--left">You can add/delete/complete your awesome todos!</p>
			<p className="hint hint--right">Edit on double click, save on enter</p>
			<img src={logo} className="app-header__logo" alt="logo" />
			<h1 className="app-header__heading">Todos</h1>
		</header>
	);
}

export default AppHeader;