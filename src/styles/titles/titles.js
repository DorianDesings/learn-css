import styled from 'styled-components';
import { COLORS } from '../colors';

const StyledMainTitle = styled.h1`
	margin-block: 1.5rem 1rem;
	font-size: 2.5rem;
	font-weight: 400;
`;

const StyledTitle = styled.h2`
	font-size: 1.6rem;
	font-weight: 400;
	color: ${COLORS.tertiary};
`;

const StyledSubtitle = styled.h3`
	font-size: 1.4rem;
	font-weight: 400;
	margin: 0;
`;

export { StyledMainTitle, StyledSubtitle, StyledTitle };
