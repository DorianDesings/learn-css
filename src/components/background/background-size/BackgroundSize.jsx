import { useState } from 'react';
import {
	BACKGROUND_SIZE_INPUTS,
	BACKGROUND_SIZE_TEXTS
} from '../../../constants/background/background-size-data';
import {
	StyledInputRadio,
	StyledInputsContainer,
	StyledLabelRadio
} from '../../common/form-elements/radio-buttons/radio-buttons.styles';
import { StyledText } from '../../common/text/text.styled';
import { StyledBackgroundBox } from '../background.common.styles';

const BackgroundSize = () => {
	const [backgroundSize, setBackgroundSize] = useState('auto');
	return (
		<>
			<h2>Background Size</h2>
			<StyledText>
				Esta propiedad nos permite controlar el tamaño de la imagen de fondo,
				podemos dar medidas a mano o utilizar una de las tres palabras clave que
				nos da CSS.
			</StyledText>
			<StyledInputsContainer $rows={BACKGROUND_SIZE_INPUTS.length}>
				{BACKGROUND_SIZE_INPUTS.map(input => (
					<div key={input.id}>
						<StyledInputRadio
							{...input}
							onChange={() => setBackgroundSize(input.id)}
						/>
						<StyledLabelRadio htmlFor={input.id}>{input.id}</StyledLabelRadio>
					</div>
				))}
			</StyledInputsContainer>
			<StyledText>{BACKGROUND_SIZE_TEXTS[backgroundSize]}</StyledText>
			<StyledBackgroundBox $backgroundSize={backgroundSize} />
		</>
	);
};

export default BackgroundSize;
