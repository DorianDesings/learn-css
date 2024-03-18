import styled from 'styled-components';

const StyledBorderRadiusBoxTwoValues = styled.div.attrs(
	({ $ellipseTwoValues }) => ({
		style: {
			borderRadius:
				$ellipseTwoValues.yValueA === '0'
					? `${$ellipseTwoValues.xValueA}px  ${$ellipseTwoValues.xValueB}px`
					: `${$ellipseTwoValues.xValueA}px ${$ellipseTwoValues.xValueB}px / ${$ellipseTwoValues.yValueA}px ${$ellipseTwoValues.yValueB}px`
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
	overflow: hidden;
`;

const StyledCircleReference = styled.span`
	position: absolute;
	transition: opacity 0.3s;
`;

const StyledCircleReferenceTwoValuesA = styled(StyledCircleReference).attrs(
	({ $ellipseTwoValues }) => ({
		style: {
			width: $ellipseTwoValues.xValueA * 2 + 'px',
			height:
				$ellipseTwoValues.yValueA === '0'
					? $ellipseTwoValues.xValueA * 2 + 'px'
					: $ellipseTwoValues.yValueA * 2 + 'px',
			borderRadius:
				$ellipseTwoValues.yValueA === '0'
					? `${$ellipseTwoValues.xValueA}px`
					: `${$ellipseTwoValues.xValueA}px / ${$ellipseTwoValues.yValueA}px`,
			boxShadow:
				$ellipseTwoValues.yValueA === '0'
					? `${150 - $ellipseTwoValues.xValueA * 2}px ${
							150 - $ellipseTwoValues.xValueA * 2
						}px`
					: `${150 - $ellipseTwoValues.xValueA * 2}px ${
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

const StyledCircleReferenceTwoValuesB = styled(StyledCircleReference).attrs(
	({ $ellipseTwoValues }) => ({
		style: {
			width: $ellipseTwoValues.xValueB * 2 + 'px',
			height:
				$ellipseTwoValues.yValueB === '0'
					? $ellipseTwoValues.xValueB * 2 + 'px'
					: $ellipseTwoValues.yValueB * 2 + 'px',
			borderRadius:
				$ellipseTwoValues.yValueB === '0'
					? `${$ellipseTwoValues.xValueB}px`
					: `${$ellipseTwoValues.xValueB}px / ${$ellipseTwoValues.yValueB}px`,
			boxShadow:
				$ellipseTwoValues.yValueB === '0'
					? `${150 - $ellipseTwoValues.xValueB * 2}px ${
							$ellipseTwoValues.xValueB * 2 - 150
						}px`
					: `${150 - $ellipseTwoValues.xValueB * 2}px ${
							$ellipseTwoValues.yValueB * 2 - 150
						}px`
		}
	})
)`
	left: 0;
	bottom: 0;
	background-color: blue;
	color: blue;
	opacity: ${({ $showEllipses }) => ($showEllipses ? '.2' : '0')};
`;

export {
	StyledBorderRadiusBoxTwoValues,
	StyledCircleReferenceTwoValuesA,
	StyledCircleReferenceTwoValuesB
};
