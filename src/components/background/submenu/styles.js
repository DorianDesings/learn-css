import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

const StyledBackgroundMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 1rem;
	width: 50%;

	@media screen and (width > 768px) {
		flex-direction: row;
	}
`;

const StyledSubmenuItem = styled.li`
	color: ${({ $active }) => ($active ? COLORS.tertiary : 'inherit')};
	white-space: nowrap;
`;

export { StyledBackgroundMenu, StyledSubmenuItem };
