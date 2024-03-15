import styled from 'styled-components';
import { COLORS } from '../colors';

const StyledText = styled.p`
	font-size: 1.2rem;
	margin-block: 0;
	line-height: 3;
`;

const StyledSpan = styled.span`
	font-size: 1rem;
`;

const StyledHightlight = styled.span`
	color: ${COLORS.primary};
`;

export { StyledHightlight, StyledSpan, StyledText };
