import { useState } from 'react';
import {
	BACKGROUND_REPEAT_INPUTS,
	BACKGROUND_REPEAT_TEXTS
} from '../../../constants/background/background-repeat-data';

import { StyledInputsContainer } from '../../../styles/form-elements/inputs/inputs.styles';
import {
	StyledInputRadio,
	StyledLabel
} from '../../../styles/form-elements/radio-buttons/radio-buttons.styles';
import { StyledBoxBackgroundAlternate } from '../../../styles/section/sections.styles';
import { StyledText } from '../../../styles/texts/texts';
import BackgroundBox from '../background-box/BackgroundBox';

const BackgroundRepeat = () => {
	const [backgroundRepeat, setBackgroundRepeat] = useState('repeat');
	return (
		<>
			<h2>Background Repeat</h2>
			<StyledText>
				Esta propiedad nos permite controlar si el background se repite o no, y
				de repetirse nos permite decidir en qué eje queremos repetirlo.
			</StyledText>
			<StyledInputsContainer $rows={BACKGROUND_REPEAT_INPUTS.length}>
				{BACKGROUND_REPEAT_INPUTS.map(input => (
					<div key={input.id}>
						<StyledInputRadio
							{...input}
							onChange={() => setBackgroundRepeat(input.id)}
						/>
						<StyledLabel htmlFor={input.id}>{input.id}</StyledLabel>
					</div>
				))}
			</StyledInputsContainer>
			<StyledText>{BACKGROUND_REPEAT_TEXTS[backgroundRepeat]}</StyledText>
			<BackgroundBox
				property='repeat'
				$backgroundRepeat={backgroundRepeat}
				$image='/images/dorian.png'
			/>
			<StyledText>Resultado:</StyledText>
			<StyledBoxBackgroundAlternate>
				background-repeat: {backgroundRepeat}
			</StyledBoxBackgroundAlternate>
		</>
	);
};

export default BackgroundRepeat;
