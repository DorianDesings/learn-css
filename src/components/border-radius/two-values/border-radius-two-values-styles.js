import styled from 'styled-components';

const StyledBorderRadiusBoxTwoValues = styled.div.attrs(
	({ $ellipseTwoValues }) => ({
		style: {
			borderRadius: `${$ellipseTwoValues.xValueA}px ${$ellipseTwoValues.xValueB}px / ${$ellipseTwoValues.yValueA}px ${$ellipseTwoValues.yValueB}px`
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
	/* overflow: hidden; */
`;

const StyledCircleReference = styled.span`
	position: absolute;
	transition: opacity 0.3s;
`;

const StyledCircleReferenceTwoValuesA = styled(StyledCircleReference).attrs(
	({ $ellipseTwoValues }) => ({
		style: {
			width: $ellipseTwoValues.xValueA * 2 + 'px',
			height: $ellipseTwoValues.yValueA * 2 + 'px',
			borderRadius: `${$ellipseTwoValues.xValueA}px / ${$ellipseTwoValues.yValueA}px`,
			boxShadow: `${150 - $ellipseTwoValues.xValueA * 2}px ${
				150 - $ellipseTwoValues.yValueA * 2
			}px`
		}
	})
)`
	top: 0;
	left: 0;
	background-color: red;
	color: red;
	opacity: ${({ $showEllipses }) => ($showEllipses ? '.2' : '0')};
`;

const StyledCircleReferenceTwoValuesB = styled(StyledCircleReference)`
	left: 0;
	bottom: 0;
	width: ${({ $ellipseTwoValues }) => $ellipseTwoValues.xValueB * 2 + 'px'};
	height: ${({ $ellipseTwoValues }) => $ellipseTwoValues.yValueB * 2 + 'px'};
	border-radius: ${({ $ellipseTwoValues }) => `
			${$ellipseTwoValues.xValueB}px / ${$ellipseTwoValues.yValueB}px
			`};
	box-shadow: ${({ $ellipseTwoValues }) => `
			${150 - $ellipseTwoValues.xValueB * 2}px ${
				$ellipseTwoValues.yValueB * 2 - 150
			}px
			`};
	background-color: blue;
	color: blue;
	opacity: ${({ $showEllipses }) => ($showEllipses ? '.2' : '0')};
`;

export {
	StyledBorderRadiusBoxTwoValues,
	StyledCircleReferenceTwoValuesA,
	StyledCircleReferenceTwoValuesB
};
