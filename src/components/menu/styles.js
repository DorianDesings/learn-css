import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	box-shadow: 0 10px 10px rgb(0 0 0 / 0.1);
	background-color: ${COLORS.backgroundAlternate};
	opacity: 0.4;

	@media screen and (width > 768px) {
		opacity: 1;
	}
`;

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: 100vh;
	padding: 1rem 2rem;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (width > 768px) {
		width: 100%;
		flex-direction: row;
		height: auto;
	}
`;

const StyledNavLink = styled(NavLink)`
	&.active {
		color: ${COLORS.secondary};
	}
`;

export { StyledMenu, StyledNav, StyledNavLink };
