import { useState } from 'react';
import {
	StyledFormField,
	StyledGenericInput,
	StyledInputColor,
	StyledInputsContainer
} from '../../styles/form-elements/inputs/inputs.styles';
import {
	StyledToggleCheck,
	StyledToggleLabel
} from '../../styles/form-elements/toggle/toggle.styles';
import {
	StyledBoxBackgroundAlternate,
	StyledFlexContainer
} from '../../styles/section/sections.styles';
import {
	StyledHightlight,
	StyledSpan,
	StyledText
} from '../../styles/texts/texts';
import { StyledMainTitle, StyledTitle } from '../../styles/titles/titles';
import { StyledBoxShadowBox } from './box-shadow.styles';

const BoxShadow = () => {
	const [boxShadowX, setBoxShadowX] = useState(15);
	const [boxShadowY, setBoxShadowY] = useState(15);
	const [boxShadowBlur, setBoxShadowBlur] = useState(13);
	const [boxShadowSpread, setBoxShadowSpread] = useState(0);
	const [boxShadowColor, setBoxShadowColor] = useState('#070A0D');
	const [boxShadowInset, setBoxShadowInset] = useState(false);

	const boxShadowValues = getBoxShadowValues(
		boxShadowX,
		boxShadowY,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowColor,
		boxShadowInset
	);

	return (
		<>
			<StyledMainTitle>Guía interactiva para Box Shadow</StyledMainTitle>
			<StyledText>
				Cuando utilizas box-shadow estás creando una copia del elemento al que
				le estás aplicando la sombra. Este duplicado tiene las mismas medidas de
				tamaño que el elemento original, respetando su modelo de caja, esto
				incluye el border, el padding y el border radius del elemento.
			</StyledText>
			<StyledText>
				Para utilizarlo necesitamos dos valores como mínimo, el desplazamiento
				de la sombra en el eje x y el desplazamiento de la sombra en el eje y.
				También es importante recordar que las sombras{' '}
				<StyledHightlight>SIEMPRE</StyledHightlight> se generan por detrás del
				elemento.
			</StyledText>
			<StyledText>La sintaxis para usar box shadow es:</StyledText>
			<StyledFlexContainer>
				<div>
					<StyledTitle>Valores Obligatorios</StyledTitle>
					<StyledInputsContainer $rows={4}>
						<StyledFormField>
							<StyledSpan>Eje X</StyledSpan>
							<StyledGenericInput
								type='range'
								min={-50}
								max={50}
								value={boxShadowX}
								onInput={event => setBoxShadowX(event.target.value)}
							/>
						</StyledFormField>
						<StyledFormField>
							<StyledSpan>Eje Y</StyledSpan>
							<StyledGenericInput
								type='range'
								min={-50}
								max={50}
								value={boxShadowY}
								onInput={event => setBoxShadowY(event.target.value)}
							/>
						</StyledFormField>
					</StyledInputsContainer>
				</div>
				<div>
					<StyledTitle>Valores Opcionales</StyledTitle>
					<StyledInputsContainer $rows={2}>
						<StyledFormField>
							<StyledSpan>Desenfoque</StyledSpan>
							<StyledGenericInput
								type='range'
								min={0}
								max={40}
								value={boxShadowBlur}
								onInput={event => setBoxShadowBlur(event.target.value)}
							/>
						</StyledFormField>
						<StyledFormField>
							<StyledSpan>Expansión</StyledSpan>
							<StyledGenericInput
								type='range'
								min={0}
								max={40}
								value={boxShadowSpread}
								onInput={event => setBoxShadowSpread(event.target.value)}
							/>
						</StyledFormField>

						<StyledFormField>
							<StyledSpan>Color</StyledSpan>
							<StyledInputColor
								type='color'
								value={boxShadowColor}
								onInput={event => setBoxShadowColor(event.target.value)}
							/>
						</StyledFormField>
						<StyledFormField>
							<StyledSpan>Sombra interna</StyledSpan>
							<StyledToggleCheck
								type='checkbox'
								id='inset'
								onChange={event => setBoxShadowInset(event.target.checked)}
							/>
							<StyledToggleLabel htmlFor='inset' $checked={boxShadowInset} />
						</StyledFormField>
					</StyledInputsContainer>
				</div>

				<StyledBoxShadowBox
					$boxShadowX={boxShadowX}
					$boxShadowY={boxShadowY}
					$boxShadowBlur={boxShadowBlur}
					$boxShadowSpread={boxShadowSpread}
					$boxShadowColor={boxShadowColor}
					$boxShadowInset={boxShadowInset}
				/>
			</StyledFlexContainer>
			<StyledText>Resultado:</StyledText>
			<StyledBoxBackgroundAlternate>
				box-shadow: {boxShadowValues}
			</StyledBoxBackgroundAlternate>
		</>
	);
};

const getBoxShadowValues = (x, y, blur, spread, color, inset) => {
	let values = '';

	// Agregar valores de posición (x, y) en el caso de que sean mayores de 0 agregar el string 'px'
	values += `${x === '0' ? x : x + 'px'}`;
	values += ' ' + `${y === '0' ? y : y + 'px'}`;

	if (blur !== '0' || spread !== '0') {
		values += ' ' + `${blur > 0 ? blur + 'px' : blur}`;
	}

	// Agregar valor de expansión (spread) solo si no es 0
	if (spread !== '0') {
		values += ' ' + `${spread}px`;
	}

	values += ' ' + `${color}`;

	if (inset) {
		values += ' ' + `inset`;
	}

	return values + ';';
};

export default BoxShadow;
