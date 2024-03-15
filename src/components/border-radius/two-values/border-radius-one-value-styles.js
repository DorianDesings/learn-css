import styled from 'styled-components';

const StyledBorderRadiusBoxTwoValues = styled.div.attrs(
	({ $ellipseOneValue }) => ({
		style: {
			borderRadius: `${$ellipseOneValue.xValue}px / ${$ellipseOneValue.yValue}px`
		}
	})
)`
	position: relative;
	width: 150px;
	height: 150px;
	background-color: orange;
	align-self: center;
	justify-self: center;
	margin-inline: auto;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: ${({ $ellipseOneValue }) => $ellipseOneValue.xValue * 2 + 'px'};
		height: ${({ $ellipseOneValue }) => $ellipseOneValue.yValue * 2 + 'px'};
		border-radius: ${({ $ellipseOneValue }) => `
			${$ellipseOneValue.xValue}px / ${$ellipseOneValue.yValue}px
			`};
		background-color: red;
		color: red;
		opacity: ${({ $showEllipses }) => ($showEllipses ? '.2' : '0')};
		transition: opacity 0.3s;
	}
`;

export { StyledBorderRadiusBoxTwoValues };
