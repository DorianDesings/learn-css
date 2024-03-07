import { useState } from 'react';
import {
	BACKGROUND_SIZE_INPUTS,
	BACKGROUND_SIZE_TEXTS
} from '../../../constants/background/background-size-data';
import { StyledNumberInput } from '../../common/form-elements/inputs/inputs.styles';
import {
	StyledInputRadio,
	StyledInputsContainer,
	StyledLabelRadio
} from '../../common/form-elements/radio-buttons/radio-buttons.styles';
import { StyledSpan, StyledText } from '../../common/text/text.styled';
import { StyledBackgroundBox } from '../background.common.styles';

const BackgroundSize = () => {
	const [backgroundSize, setBackgroundSize] = useState('auto');
	const [backgroundSizeValues, setBackgroundSizeValues] = useState({
		x: 100,
		y: 100
	});
	console.log(backgroundSizeValues);
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
			<StyledInputsContainer $rows={4}>
				<StyledSpan>Eje X</StyledSpan>
				<StyledNumberInput
					type='number'
					value={backgroundSizeValues.x}
					min={0}
					onInput={event =>
						setBackgroundSizeValues({
							...backgroundSizeValues,
							x: Number(event.target.value)
						})
					}
				/>
				<StyledSpan>Eje Y</StyledSpan>
				<StyledNumberInput
					type='number'
					min={0}
					value={backgroundSizeValues.y}
					onInput={event =>
						setBackgroundSizeValues({
							...backgroundSizeValues,
							y: Number(event.target.value)
						})
					}
				/>
			</StyledInputsContainer>
			<StyledText>{BACKGROUND_SIZE_TEXTS[backgroundSize]}</StyledText>
			<StyledBackgroundBox
				$backgroundSize={backgroundSize}
				$backgroundSizeValues={backgroundSizeValues}
			/>
		</>
	);
};

export default BackgroundSize;
