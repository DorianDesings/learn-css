import styled from 'styled-components';
import { COLORS } from './colors';
import { SIZES } from './sizes';

const StyledText = styled.p`
	line-height: 2;
`;

const StyledInputs = styled.div`
	display: flex;
	width: ${SIZES.containerWidth};
	margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
	padding: 0.3rem 1.2rem;
	/* border: 1px solid ${COLORS.primary}; */
	cursor: pointer;
	border-radius: 0.25rem;
`;

const StyledInput = styled.input`
	display: none;

	&:checked + ${StyledLabel} {
		background-color: ${COLORS.primary};
		color: #111;
	}
`;

export { StyledInput, StyledInputs, StyledLabel, StyledText };
