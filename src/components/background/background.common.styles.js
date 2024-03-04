import styled from 'styled-components';
import dorianPng from '../../../public/images/dorian.png';
import { COLORS } from '../../styles/colors';

const StyledBackgroundBox = styled.div`
	width: 400px;
	height: 300px;
	background-color: ${COLORS.backgroundAlternate};
	background-image: url(${dorianPng});
	background-repeat: ${({ $backgroundRepat }) => $backgroundRepat};
`;

export { StyledBackgroundBox };
