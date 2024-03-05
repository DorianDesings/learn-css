import { useState } from 'react';
import {
	BACKGROUND_REPEAT_INPUTS,
	BACKGROUND_REPEAT_TEXTS
} from '../../../constants/background/background-repeat-data';
import {
	StyledInputRadio,
	StyledInputsContainer,
	StyledLabelRadio
} from '../../common/form-elements/radio-buttons/radio-buttons.styles';
import { StyledText } from '../../common/text/text.styled';
import { StyledBackgroundBox } from '../background.common.styles';

const BackgroundRepeat = () => {
	const [backgroundRepeat, setBackgroundRepeat] = useState('repeat');
	return (
		<>
			<h2>Background Repeat</h2>
			<StyledText>
				Esta propiedad nos controlar si el background se repite o no, y de
				repetirse nos permite decidir en qué eje queremos repetirlo.
			</StyledText>
			<StyledInputsContainer $rows={BACKGROUND_REPEAT_INPUTS.length}>
				{BACKGROUND_REPEAT_INPUTS.map(input => (
					<div key={input.id}>
						<StyledInputRadio
							{...input}
							onChange={() => setBackgroundRepeat(input.id)}
						/>
						<StyledLabelRadio htmlFor={input.id}>{input.id}</StyledLabelRadio>
					</div>
				))}
			</StyledInputsContainer>
			<StyledText>{BACKGROUND_REPEAT_TEXTS[backgroundRepeat]}</StyledText>
			<StyledBackgroundBox $backgroundRepeat={backgroundRepeat} />
		</>
	);
};

export default BackgroundRepeat;
