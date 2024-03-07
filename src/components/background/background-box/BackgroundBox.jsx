import {
	StyledBackgroundAttachmentBox,
	StyledBackgroundPositionBox,
	StyledBackgroundRepeatBox,
	StyledBackgroundSizeBox
} from './background-box.styles';

const BackgroundBox = ({ property, children, ...props }) => {
	const StyledBox = getStyledBox(property);
	return <StyledBox {...props}>{children}</StyledBox>;
};

const getStyledBox = property => {
	switch (property) {
		case 'position':
			return StyledBackgroundPositionBox;
		case 'repeat':
			return StyledBackgroundRepeatBox;
		case 'size':
			return StyledBackgroundSizeBox;
		case 'attachment':
			return StyledBackgroundAttachmentBox;
	}
};

export default BackgroundBox;
