import styled from 'styled-components';
import { COLORS } from '../../colors';

const StyledToggleLabel = styled.label`
	position: relative;
	width: 45px;
	height: 25px;
	border-radius: 2rem;
	background-color: #333;

	&::after {
		content: '';
		position: absolute;
		top: 3px;
		left: 3px;
		width: 20px;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: grey;
		transition: transform 0.3s;

		transform: translateX(0);
	}
`;

const StyledToggleCheck = styled.input`
	display: none;

	&:checked + ${StyledToggleLabel}::after {
		background-color: ${COLORS.primary};

		transform: translateX(calc(100% - 3px));
	}
`;

export { StyledToggleCheck, StyledToggleLabel };
