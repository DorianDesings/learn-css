import styled from 'styled-components';
import { COLORS } from '../../../../styles/colors';

const StyledSelectValue = styled.select`
	width: 75px;
	height: 46px;
	font-size: 1.2rem;
	padding-left: 0.5rem;
	color: ${COLORS.primary};
	border: 1px solid;
	background-color: transparent;
`;

const StyledOption = styled.option`
	width: 75px;
	height: 46px;
	color: ${COLORS.primary};
	background-color: ${COLORS.background};
`;

export { StyledOption, StyledSelectValue };
