import { justifyContentAnimation } from '../../../constants/animations';
import { FLEXBOX_DATA } from '../../../constants/flexbox-data';
import { SIZES } from '../../../styles/sizes';

import { useState } from 'react';
import { StyledText } from '../../../styles/common';
import JustifyContentInputs from '../justify-content-inputs/JustifyContentInputs';
import { StyledBox, StyledFlexContainer, StyledSpanWidth } from '../styles';

const JustifyContent = () => {
	const [justifyContent, setJustifyContent] = useState('start');
	return (
		<div>
			<h2>Justify Content</h2>
			<JustifyContentInputs setJustifyContent={setJustifyContent} />
			<StyledFlexContainer $justifyContent={justifyContent}>
				<StyledBox layout transition={justifyContentAnimation}>
					1
				</StyledBox>

				<StyledBox layout transition={justifyContentAnimation}>
					2
				</StyledBox>

				<StyledBox layout transition={justifyContentAnimation}>
					3
				</StyledBox>
			</StyledFlexContainer>
			<StyledSpanWidth>{SIZES.containerWidth}</StyledSpanWidth>
			<div>
				<h3>{FLEXBOX_DATA[justifyContent].TITLE}:</h3>
				<StyledText>{FLEXBOX_DATA[justifyContent].TEXT}</StyledText>
				<StyledText>
					{FLEXBOX_DATA[justifyContent]?.EQUATION?.LINE_ONE}
				</StyledText>
				<StyledText>
					{FLEXBOX_DATA[justifyContent]?.EQUATION?.LINE_TWO}
				</StyledText>
				<StyledText>
					{FLEXBOX_DATA[justifyContent]?.EQUATION?.LINE_THREE}
				</StyledText>
			</div>
		</div>
	);
};

export default JustifyContent;
