import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledBackgroundBox = styled.div`
	width: 400px;
	height: 300px;
	background-color: ${COLORS.backgroundAlternate};
	background-image: url('/images/dorian.png');
	background-repeat: ${({ $backgroundRepeat }) =>
		$backgroundRepeat || 'no-repeat'};
	background-position: ${({
		$bgPositionX,
		$bgPositionY,
		$bgPositionXUnit,
		$bgPositionYUnit
	}) =>
		`${$bgPositionX}${$bgPositionXUnit} ${$bgPositionY}${$bgPositionYUnit}` ||
		'0 0'};
	transition: background 0.3s;
`;

const StyledNumberInput = styled.input`
	width: 75px;
	height: 46px;
	background-color: transparent;
	color: ${COLORS.primary};
	font-size: 1.2rem;
	padding-left: 1rem;
	border: 1px solid;
`;

const StyledSelectValue = styled.select`
	width: 75px;
	height: 46px;
	font-size: 1.2rem;
	padding-left: 0.5rem;
	color: ${COLORS.primary};
	border: 1px solid;
	background-color: transparent;
`;

const StyledOption = styled.option`
	width: 75px;
	height: 46px;
	color: ${COLORS.primary};
	background-color: ${COLORS.background};
`;

export {
	StyledBackgroundBox,
	StyledNumberInput,
	StyledOption,
	StyledSelectValue
};
