import styled from 'styled-components';

const StyledBorderRadiusBoxOneValue = styled.div.attrs(
	({ $ellipseOneValue }) => ({
		style: {
			borderRadius:
				$ellipseOneValue.yValue === '0'
					? `${$ellipseOneValue.xValue}px`
					: `${$ellipseOneValue.xValue}px / ${$ellipseOneValue.yValue}px`
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
`;

const StyledCircleReference = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	transition: opacity 0.3s;
`;

const StyledCircleReferenceOneValue = styled(StyledCircleReference)`
	width: ${({ $ellipseOneValue }) => $ellipseOneValue.xValue * 2 + 'px'};
	height: ${({ $ellipseOneValue }) => $ellipseOneValue.yValue * 2 + 'px'};
	border-radius: ${({ $ellipseOneValue }) => `
			${$ellipseOneValue.xValue}px / ${$ellipseOneValue.yValue}px
			`};
	box-shadow: ${({ $ellipseOneValue }) => `
			${150 - $ellipseOneValue.xValue * 2}px ${150 - $ellipseOneValue.yValue * 2}px
			`};
	background-color: red;
	color: red;
	opacity: ${({ $showEllipses }) => ($showEllipses ? '.2' : '0')};
`;

export { StyledBorderRadiusBoxOneValue, StyledCircleReferenceOneValue };
