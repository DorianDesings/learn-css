import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

const StyledFlexboxMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 50%;
`;

const StyledSubmenuItem = styled.li`
	color: ${({ $active }) => ($active ? COLORS.tertiary : 'inherit')};
`;

export { StyledFlexboxMenu, StyledSubmenuItem };
