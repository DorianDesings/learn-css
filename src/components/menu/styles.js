import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	box-shadow: 0 10px 10px rgb(0 0 0 / 0.1);
	background-color: ${COLORS.backgroundAlternate};
`;

const StyledMenu = styled.ul`
	display: flex;
	align-items: start;
	padding: 1rem 2rem;
	gap: 2rem;
	width: 100%;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
`;

const StyledNavLink = styled(NavLink)`
	&.active {
		color: ${COLORS.secondary};
	}
`;

export { StyledMenu, StyledNav, StyledNavLink };
