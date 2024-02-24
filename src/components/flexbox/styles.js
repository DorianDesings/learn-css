import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { COLORS } from '../../styles/colors';
import { SIZES } from '../../styles/sizes';

const StyledFlexContainer = styled.div`
	position: relative;
	display: ${({ $display }) => $display || 'flex'};
	justify-content: ${({ $justifyContent }) => $justifyContent || 'start'};
	flex-direction: ${({ $direction }) => $direction || 'row'};
	width: ${SIZES.containerWidth};
	min-height: 300px;
	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	background-color: ${COLORS.backgroundAlternate};
	overflow: hidden;

	${({ $direction }) =>
		$direction &&
		css`
			&::after,
			&::before {
				content: 'Main Axis';
				position: absolute;
				text-align: right;
				top: 108px;
				right: 50px;
				padding-right: 2.5rem;
				padding-bottom: 1rem;
				border-bottom: 4px solid rgb(255 255 255);
				width: 175px;
				font-size: 1.5rem;
			}

			&::before {
				content: '';
				top: 140px;
				width: 30px;
				height: 30px;
				padding: 0;
				border-top: 4px solid rgb(255 255 255);
				border-right: 4px solid rgb(255 255 255);
				border-bottom: none;
				rotate: 45deg;
				z-index: 1;
			}
		`}

	${({ $direction }) =>
		$direction === 'column' &&
		css`
			&::after,
			&::before {
				rotate: 90deg;
			}

			&::before {
				top: 190px;
				right: 145px;
				rotate: 135deg;
			}
		`}

		${({ $direction }) =>
		$direction === 'row-reverse' &&
		css`
			&::after {
				padding-right: 1.5rem;
			}
			&::before {
				top: 140px;
				right: 195px;
				rotate: 225deg;
			}
		`}

		${({ $direction }) =>
		$direction === 'column-reverse' &&
		css`
			&::after,
			&::before {
				rotate: 90deg;
			}

			&::after {
				padding-right: 1.5rem;
			}

			&::before {
				top: 45px;
				right: 145px;
				rotate: -45deg;
			}
		`}
`;

const StyledBox = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 125px;
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
	width: ${SIZES.containerWidth};
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

export { StyledBox, StyledFlexContainer, StyledSpanWidth };
