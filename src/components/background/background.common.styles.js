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

export { StyledBackgroundBox };
