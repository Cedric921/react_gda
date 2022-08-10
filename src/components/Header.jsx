import icon from '../logo192.png';

const Header = () => {
	return (
		<header>
			<img src={icon} alt='logoreact' width='40' />
			<nav>
				<ul>
					<li>A propos</li>
					<li>Prix</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
