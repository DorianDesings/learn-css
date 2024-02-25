import styled from 'styled-components';
import { COLORS } from './colors';

const StyledIcon = styled.img`
	width: 40px;
`;

const StyledText = styled.p`
	display: flex;
	line-height: 2;
	align-items: center;
	gap: 1rem;
`;

const StyledTextSmall = styled(StyledText)`
	font-size: 1rem;
`;

const StyledSpanInfo = styled.span`
	margin-right: 1rem;
`;

const StyledInputs = styled.div`
	display: grid;
	grid-template-columns: repeat(${({ $rows }) => $rows || 3}, max-content);
	gap: 1rem;
	margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
	display: block;
	padding: 0.3rem 1.2rem;
	border: 1px solid ${COLORS.primary};
	cursor: pointer;
	border-radius: 0.25rem;
	margin-bottom: 0.5rem;
`;

const StyledGenericInput = styled.input`
	accent-color: ${COLORS.primary};
	margin-right: 1rem;
`;

const StyledInput = styled.input`
	display: none;

	&:checked + ${StyledLabel} {
		background-color: ${COLORS.primary};
		color: #111;
	}
`;

export {
	StyledGenericInput,
	StyledIcon,
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledSpanInfo,
	StyledText,
	StyledTextSmall
};
