import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

const StyledBackgroundBox = styled.div`
	width: 400px;
	height: 300px;
	background-color: ${COLORS.backgroundAlternate};
	background-image: url('/images/dorian.png');
	background-repeat: no-repeat;
	background-position: top left;
	background-size: cover;
	transition: background 0.3s;
`;

const StyledBackgroundPositionBox = styled(StyledBackgroundBox)`
	background-position: ${({
		$bgPositionX,
		$bgPositionY,
		$bgPositionXUnit,
		$bgPositionYUnit
	}) =>
		`${$bgPositionX}${$bgPositionXUnit} ${$bgPositionY}${$bgPositionYUnit}`};
	background-repeat: no-repeat;
`;

const StyledBackgroundRepeatBox = styled(StyledBackgroundBox)`
	background-repeat: ${({ $backgroundRepeat }) =>
		$backgroundRepeat || 'no-repeat'};
`;

const StyledBackgroundSizeBox = styled(StyledBackgroundBox)`
	background-size: ${({ $backgroundSize, $backgroundSizeValues }) =>
		$backgroundSize !== 'manual'
			? $backgroundSize
			: `${$backgroundSizeValues.x}${$backgroundSizeValues.xUnit} ${$backgroundSizeValues.y}${$backgroundSizeValues.yUnit}`};
`;

const StyledBackgroundAttachmentBox = styled(StyledBackgroundBox)`
	height: 700px;
	background-attachment: ${({ $backgroundAttachment }) =>
		$backgroundAttachment};
	background-size: auto;
	background-repeat: repeat-y;
	background-position: ${({ $backgroundAttachment }) =>
		$backgroundAttachment === 'fixed' ? '265px 500px' : 'top left'};
	overflow: auto;
	transition: none;
`;

export {
	StyledBackgroundAttachmentBox,
	StyledBackgroundBox,
	StyledBackgroundPositionBox,
	StyledBackgroundRepeatBox,
	StyledBackgroundSizeBox
};
