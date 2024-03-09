import { StyledText } from './text.styled';

const Text = ({ $big = false, children }) => {
	return <StyledText $big={$big}>{children}</StyledText>;
};

export default Text;
