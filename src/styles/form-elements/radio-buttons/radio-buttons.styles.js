import styled from 'styled-components';
import { COLORS } from '../../colors';

const StyledLabel = styled.label`
	display: block;
	padding: 0.3rem 1.2rem;
	border: 1px solid ${COLORS.primary};
	cursor: pointer;
	border-radius: 0.25rem;
	margin-bottom: 0.5rem;
`;

const StyledInputRadio = styled.input`
	display: none;

	&:checked + ${StyledLabel} {
		background-color: ${COLORS.primary};
		color: #111;
	}
`;

const StyledLabelSecondary = styled(StyledLabel)`
	border: 1px solid ${COLORS.quaternary};
	padding: 0 0.4rem;
`;

const StyledInputRadioSecondary = styled.input`
	display: none;

	&:checked + ${StyledLabel} {
		background-color: ${COLORS.quaternary};
		color: #111;
	}
`;

export {
	StyledInputRadio,
	StyledInputRadioSecondary,
	StyledLabel,
	StyledLabelSecondary
};
