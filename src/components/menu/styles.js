import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	padding: 1rem 2rem;
	width: 100%;
	box-shadow: 0 10px 10px rgb(0 0 0 / 0.1);
	background-color: ${COLORS.backgroundAlternate};

	@media screen and (width > 1200px) {
		padding: 1rem 20%;
	}
`;

const StyledMenu = styled.ul`
	width: 400px;
	display: flex;
	align-items: start;
	gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
	&.active {
		color: ${COLORS.secondary};
	}
`;

export { StyledMenu, StyledNav, StyledNavLink };
