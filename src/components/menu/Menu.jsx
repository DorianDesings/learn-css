import { StyledMenu, StyledNav, StyledNavLink } from './styles';

const Menu = () => {
	return (
		<StyledNav>
			<StyledMenu>
				<li>
					<StyledNavLink to='/'>Home</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/border-radius'>Border Radius</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/box-shadow'>Box Shadow</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/position'>Position</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/background'>Background</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/gradients'>Degradados</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/flexbox-container'>
						Flexbox (contenedor)
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/flexbox-items'>Flexbox (items)</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/grid-container'>Grid (container)</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to='/grid-items'>Grid (items)</StyledNavLink>
				</li>
			</StyledMenu>
		</StyledNav>
	);
};

export default Menu;
