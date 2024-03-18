import { useState } from 'react';
import {
	BACKGROUND_SIZE_INPUTS,
	BACKGROUND_SIZE_TEXTS
} from '../../../constants/background/background-size-data';

import {
	StyledInputsContainer,
	StyledNumberInput,
	StyledOption,
	StyledSelect
} from '../../../styles/form-elements/inputs/inputs.styles';
import {
	StyledInputRadio,
	StyledLabel
} from '../../../styles/form-elements/radio-buttons/radio-buttons.styles';
import { StyledSpan, StyledText } from '../../../styles/texts/texts';
import BackgroundBox from '../background-box/BackgroundBox';

const BackgroundSize = () => {
	const [backgroundSize, setBackgroundSize] = useState('auto');
	const [backgroundSizeValues, setBackgroundSizeValues] = useState({
		x: 200,
		xUnit: 'px',
		y: 200,
		yUnit: 'px'
	});
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
						<StyledLabel htmlFor={input.id}>{input.id}</StyledLabel>
					</div>
				))}
			</StyledInputsContainer>
			{backgroundSize === 'manual' && (
				<StyledInputsContainer $rows={3}>
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
					<StyledSelect
						value={backgroundSizeValues.xUnit}
						onChange={event =>
							setBackgroundSizeValues({
								...backgroundSizeValues,
								xUnit: event.target.value
							})
						}
					>
						<StyledOption value='%'>%</StyledOption>
						<StyledOption value='px'>px</StyledOption>
					</StyledSelect>
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
					<StyledSelect
						value={backgroundSizeValues.yUnit}
						onChange={event =>
							setBackgroundSizeValues({
								...backgroundSizeValues,
								yUnit: event.target.value
							})
						}
					>
						<StyledOption value='%'>%</StyledOption>
						<StyledOption value='px'>px</StyledOption>
					</StyledSelect>
				</StyledInputsContainer>
			)}
			<StyledText>{BACKGROUND_SIZE_TEXTS[backgroundSize]}</StyledText>
			<BackgroundBox
				property='size'
				$backgroundSize={backgroundSize}
				$backgroundSizeValues={backgroundSizeValues}
				$image='/images/dorian.png'
			/>
		</>
	);
};

export default BackgroundSize;
