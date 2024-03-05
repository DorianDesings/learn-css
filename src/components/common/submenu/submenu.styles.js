import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

const StyledSubmenu = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 1rem;
	width: fit-content;

	@media screen and (width > 768px) {
		flex-direction: row;
	}
`;

const StyledNavLink = styled(NavLink)`
	&.active {
		color: ${COLORS.tertiary};
	}
`;

export { StyledNavLink, StyledSubmenu };
