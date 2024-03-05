import { StyledNavLink, StyledSubmenu } from './submenu.styles';

const Submenu = ({ submenu }) => {
	return (
		<nav>
			<StyledSubmenu>
				{submenu.map(submenu => (
					<StyledNavLink key={submenu.id} to={submenu.path}>
						{submenu.title}
					</StyledNavLink>
				))}
			</StyledSubmenu>
		</nav>
	);
};

export default Submenu;
