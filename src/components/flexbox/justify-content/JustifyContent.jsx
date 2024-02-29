import { justifyContentAnimation } from '../../../constants/animations';
import { FLEXBOX_DATA } from '../../../constants/flexbox-data';
import { SIZES } from '../../../styles/sizes';

import { useEffect, useState } from 'react';
import {
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledText
} from '../../../styles/common';
import AxisArrow from '../axis-arrow/AxisArrow';
import JustifyContentInputs from '../justify-content-inputs/JustifyContentInputs';
import { StyledBox, StyledFlexContainer, StyledSpanWidth } from '../styles';

const JustifyContent = () => {
	const [justifyContent, setJustifyContent] = useState('start');
	const [flexDirection, setFlexDirection] = useState('row');
	const mainAxisSize =
		flexDirection === 'row' ? SIZES.containerWidth : SIZES.containerHeight;

	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 767px)').matches
	);

	useEffect(() => {
		// Suscribirse al evento de cambio de tamaño de la ventana
		window.addEventListener('resize', () => handleResize(setIsMobile));

		// Desuscribirse del evento al desmontar el componente
		return () => {
			window.removeEventListener('resize', () => handleResize(setIsMobile));
		};
	}, []);

	return (
		<div>
			<h2>Justify Content</h2>
			<JustifyContentInputs setJustifyContent={setJustifyContent} />
			<div>
				<StyledText>{FLEXBOX_DATA[justifyContent].TEXT}</StyledText>
				<StyledText>{FLEXBOX_DATA[justifyContent].FORMULA}</StyledText>
				<StyledText>
					{flexDirection === 'row' &&
						FLEXBOX_DATA[justifyContent]?.EQUATION?.LINE_ONE(68, 63, 76)}
					{flexDirection === 'column' &&
						FLEXBOX_DATA[justifyContent]?.EQUATION?.LINE_ONE(61, 61, 61)}
				</StyledText>
				<StyledText>
					{flexDirection === 'row' &&
						FLEXBOX_DATA[justifyContent]?.EQUATION?.LINE_TWO(
							mainAxisSize,
							68,
							63,
							76
						)}
					{flexDirection === 'column' &&
						FLEXBOX_DATA[justifyContent]?.EQUATION?.LINE_TWO(
							mainAxisSize,
							61,
							61,
							61
						)}
				</StyledText>
			</div>
			<StyledInputs $rows={4}>
				<div>
					<StyledInput
						type='radio'
						id='row'
						name='flex-direction'
						defaultChecked
						onChange={() => setFlexDirection('row')}
					/>
					<StyledLabel htmlFor='row'>Row</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='column'
						name='flex-direction'
						onChange={() => setFlexDirection('column')}
					/>
					<StyledLabel htmlFor='column'>Column</StyledLabel>
				</div>
			</StyledInputs>
			<AxisArrow flexDirection={flexDirection} />
			<StyledFlexContainer
				$justifyContent={justifyContent}
				$direction={flexDirection}
			>
				<StyledBox layout transition={justifyContentAnimation}>
					UNO
				</StyledBox>

				<StyledBox layout transition={justifyContentAnimation}>
					DOS
				</StyledBox>

				<StyledBox layout transition={justifyContentAnimation}>
					TRES
				</StyledBox>
			</StyledFlexContainer>
			<StyledSpanWidth>
				{isMobile ? SIZES.containerWidthMobile : SIZES.containerWidth}px
			</StyledSpanWidth>
		</div>
	);
};

const handleResize = setIsMobile => {
	setIsMobile(window.matchMedia('(max-width: 767px)').matches);
};

export default JustifyContent;
