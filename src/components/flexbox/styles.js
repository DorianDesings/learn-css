import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const StyledFlexContainer = styled.div`
	position: relative;
	display: ${({ $display }) => $display || 'flex'};
	justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
	flex-direction: ${({ $direction }) => $direction || 'row'};
	align-items: ${({ $align }) => $align || 'stretch'};
	width: ${SIZES.containerWidth}px;
	min-height: ${SIZES.containerHeight}px;
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	background-color: ${COLORS.backgroundAlternate};
`;

const StyledBox = styled(motion.div)`
	width: ${({ $boxWidth, $isWidthAuto }) =>
		$isWidthAuto ? 'auto' : $boxWidth + 'px'};
	border-radius: 0.5rem;
	background-color: ${COLORS.primary};
	font-size: 2rem;
	color: #333;
	border: 2px solid wheat;
`;

const StyledSpanWidth = styled.span`
	position: relative;
	color: aliceblue;
	display: block;
	width: ${SIZES.containerWidth}px;
	text-align: center;
	&::after,
	&::before {
		content: '';
		position: absolute;
		top: 16px;
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

export { StyledBox, StyledFlexContainer, StyledSpanWidth };
