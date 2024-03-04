import { StyledMenu, StyledNav, StyledNavLink } from './styles';

const Menu = () => {
	return (
		<StyledNav>
			<StyledMenu>
				<li>
					<StyledNavLink to='/'>Home</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/flexbox'>Flexbox</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/background'>Background</StyledNavLink>
				</li>
			</StyledMenu>
		</StyledNav>
	);
};

export default Menu;
