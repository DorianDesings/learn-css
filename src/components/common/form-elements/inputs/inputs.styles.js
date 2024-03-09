import styled from 'styled-components';
import { COLORS } from '../../../../styles/colors';

const StyledNumberInput = styled.input`
	width: 75px;
	height: 46px;
	background-color: transparent;
	color: ${COLORS.primary};
	font-size: 1.2rem;
	padding-left: 1rem;
	border: 1px solid;
`;

const StyledInputColor = styled.input`
	height: 42px;
	margin-bottom: 0.5rem;
`;

export { StyledInputColor, StyledNumberInput };
