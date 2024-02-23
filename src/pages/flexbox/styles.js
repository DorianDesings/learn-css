import styled from 'styled-components';

const StyledFlexContainer = styled.div`
	display: flex;
	justify-content: ${({ $flexStatus }) => $flexStatus};
	gap: 1rem;
	width: 600px;
	height: 200px;
	background-color: steelblue;
`;

const StyledSpanWidth = styled.span`
	position: relative;
	color: aliceblue;
	display: block;
	background-color: #333;
	width: 600px;
	text-align: center;
	&::after,
	&::before {
		content: '';
		position: absolute;
		top: 8px;
		width: 45%;
		height: 2px;
		background-color: #fff;
	}

	&::after {
		left: 0;
	}

	&::before {
		right: 0;
	}
`;

const StyledBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 125px;
	height: 125px;
	background-color: orange;
	font-size: 2rem;
	color: #333;
`;

export { StyledBox, StyledFlexContainer, StyledSpanWidth };
