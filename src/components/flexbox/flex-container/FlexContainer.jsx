import { StyledFlexContainer } from '../styles';

const FlexContainer = ({ flexStatus }) => {
	return (
		<>
			<StyledFlexContainer $flexStatus={flexStatus}>
				<motion.div layout transition={spring}>
					<StyledBox>1</StyledBox>
				</motion.div>
				<motion.div layout transition={spring}>
					<StyledBox>2</StyledBox>
				</motion.div>
				<motion.div layout transition={spring}>
					<StyledBox>3</StyledBox>
				</motion.div>
			</StyledFlexContainer>
			<StyledSpanWidth>{SIZES.containerWidth}</StyledSpanWidth>
		</>
	);
};

export default FlexContainer;
