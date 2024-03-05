import styled from 'styled-components';
import { COLORS } from '../../../../styles/colors';

const StyledInputsContainer = styled.div`
	display: grid;
	width: fit-content;
	gap: 1rem;
	margin-bottom: 1rem;

	@media screen and (width>768px) {
		grid-template-columns: repeat(${({ $rows }) => $rows || 3}, max-content);
	}
`;

const StyledLabelRadio = styled.label`
	display: block;
	padding: 0.3rem 1.2rem;
	border: 1px solid ${COLORS.primary};
	cursor: pointer;
	border-radius: 0.25rem;
	margin-bottom: 0.5rem;
`;

const StyledInputRadio = styled.input`
	display: none;

	&:checked + ${StyledLabelRadio} {
		background-color: ${COLORS.primary};
		color: #111;
	}
`;

export { StyledInputRadio, StyledInputsContainer, StyledLabelRadio };
