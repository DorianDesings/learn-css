import { motion } from 'framer-motion';
import { useState } from 'react';
import FlexboxInputs from '../../components/flexbox-inputs/FlexboxInputs';
import { FLEXBOX_DATA } from '../../constants/flexbox-data';
import { StyledBox, StyledFlexContainer, StyledSpanWidth } from './styles';

const spring = {
	type: 'spring',
	stiffness: 400,
	damping: 30
};

const Flexbox = () => {
	const [flexStatus, setFlexStatus] = useState('start');

	return (
		<>
			<h1>Guía interactiva para Flexbox</h1>
			<div>
				<h2>Justify Content</h2>
				<FlexboxInputs setFlexStatus={setFlexStatus} />
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
				<StyledSpanWidth>600px</StyledSpanWidth>
				<div>
					<h2>{FLEXBOX_DATA[flexStatus].title}:</h2>
					<p>{FLEXBOX_DATA[flexStatus].text}</p>
					<p>{FLEXBOX_DATA[flexStatus]?.equation?.lineOne}</p>
					<p>{FLEXBOX_DATA[flexStatus]?.equation?.lineTwo}</p>
					<p>{FLEXBOX_DATA[flexStatus]?.equation?.lineThree}</p>
				</div>
			</div>
		</>
	);
};

export default Flexbox;
