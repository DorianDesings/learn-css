import styled from 'styled-components';
import { COLORS } from './colors';

const StyledText = styled.p`
	line-height: 2;
`;

const StyledTextSmall = styled(StyledText)`
	font-size: 1rem;
`;

const StyledTextWithMargin = styled(StyledText)`
	display: flex;
	align-items: center;
	gap: 1rem;
	line-height: 2;
`;

const StyledSpanInfo = styled.span`
	margin-right: 1rem;
`;

const StyledHightlight = styled.span`
	color: ${COLORS.primary};
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
	StyledHightlight,
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledSpanInfo,
	StyledText,
	StyledTextSmall,
	StyledTextWithMargin
};
