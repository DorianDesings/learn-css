import styled from 'styled-components';

const StyledText = styled.p`
	line-height: 2;
	margin: 0 0 1rem;
	font-size: ${({ $big }) => ($big ? '1.5rem' : '1.2rem')};
`;

const StyledSpan = styled.span`
	line-height: 2;
`;

export { StyledSpan, StyledText };
