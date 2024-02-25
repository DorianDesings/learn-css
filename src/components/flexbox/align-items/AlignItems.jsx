import { useState } from 'react';
import { justifyContentAnimation } from '../../../constants/animations';
import {
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledText
} from '../../../styles/common';
import { SIZES } from '../../../styles/sizes';
import JustifyContentInputs from '../justify-content-inputs/JustifyContentInputs';
import { StyledBox, StyledFlexContainer, StyledSpanWidth } from '../styles';

const AlignItems = () => {
	const [flexDirection, setFlexDirection] = useState('row');
	const [justifyContent, setJustifyContent] = useState('start');
	const [alignItems, setAlignItems] = useState('stretch');
	return (
		<>
			<h2>Align Items</h2>
			<StyledText>
				La propiedad align items nos permite alinear los elementos en base al
				eje secundario, si el eje principal es horizontal lo podemos entender
				como alineamiento vertical, y si el eje principal está en vertical, lo
				podemos entender como alineamiento horizontal.
			</StyledText>

			<h4>Eje Principal</h4>
			<StyledInputs $rows={4}>
				<div>
					<StyledInput
						type='radio'
						id='justify-row'
						name='justify-flex-direction'
						defaultChecked
						onChange={() => setFlexDirection('row')}
					/>
					<StyledLabel htmlFor='justify-row'>Row</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='justify-column'
						name='justify-flex-direction'
						onChange={() => setFlexDirection('column')}
					/>
					<StyledLabel htmlFor='justify-column'>Column</StyledLabel>
				</div>
			</StyledInputs>
			<JustifyContentInputs setJustifyContent={setJustifyContent} />

			<h4>Eje Secundario</h4>
			<StyledInputs $rows={5}>
				<div>
					<StyledInput
						type='radio'
						id='align-stretch'
						name='align-items'
						defaultChecked
						onChange={() => setAlignItems('stretch')}
					/>
					<StyledLabel htmlFor='align-stretch'>Stretch</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='align-start'
						name='align-items'
						onChange={() => setAlignItems('start')}
					/>
					<StyledLabel htmlFor='align-start'>Start</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='align-center'
						name='align-items'
						onChange={() => setAlignItems('center')}
					/>
					<StyledLabel htmlFor='align-center'>Center</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='align-end'
						name='align-items'
						onChange={() => setAlignItems('end')}
					/>
					<StyledLabel htmlFor='align-end'>End</StyledLabel>
				</div>
			</StyledInputs>
			<StyledFlexContainer
				$direction={flexDirection}
				$align={alignItems}
				$justifyContent={justifyContent}
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
			<StyledSpanWidth>{SIZES.containerWidth}px</StyledSpanWidth>
		</>
	);
};

export default AlignItems;
