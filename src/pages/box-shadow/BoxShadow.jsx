import { useState } from 'react';
import { StyledInputColor } from '../../components/common/form-elements/inputs/inputs.styles';
import Text from '../../components/common/text/Text';
import { StyledSpan } from '../../components/common/text/text.styled';
import {
	StyledGenericInput,
	StyledHightlight,
	StyledInput,
	StyledInputs,
	StyledLabel
} from '../../styles/common';
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
			<h1>Guía interactiva para Box Shadow</h1>
			<Text>
				Box shadow se utiliza para dar sombras a las cajas de los elementos.
				Esta propiedad siempre genera una copia de la caja a la que pertenece
				respetando su box model.
			</Text>
			<Text>Para utilizarlo necesitamos dos valores como mínimo.</Text>
			<Text>
				Las sombras <StyledHightlight>SIEMPRE</StyledHightlight> se generan por
				detrás del elemento.
			</Text>
			<Text $big>Valores Obligatorios</Text>
			<StyledInputs $rows={4}>
				<StyledSpan>Eje X</StyledSpan>
				<StyledGenericInput
					type='range'
					min={-50}
					max={50}
					value={boxShadowX}
					onInput={event => setBoxShadowX(event.target.value)}
				/>
				<StyledSpan>Eje Y</StyledSpan>
				<StyledGenericInput
					type='range'
					min={-50}
					max={50}
					value={boxShadowY}
					onInput={event => setBoxShadowY(event.target.value)}
				/>
			</StyledInputs>

			<Text $big>Valores Opcionales</Text>
			<StyledInputs $rows={8}>
				<StyledSpan>Desenfoque</StyledSpan>
				<StyledGenericInput
					type='range'
					min={0}
					max={40}
					value={boxShadowBlur}
					onInput={event => setBoxShadowBlur(event.target.value)}
				/>
				<StyledSpan>Expansión</StyledSpan>
				<StyledGenericInput
					type='range'
					min={0}
					max={40}
					value={boxShadowSpread}
					onInput={event => setBoxShadowSpread(event.target.value)}
				/>

				<StyledSpan>Color</StyledSpan>
				<StyledInputColor
					type='color'
					value={boxShadowColor}
					onInput={event => setBoxShadowColor(event.target.value)}
				/>
				<StyledInput
					type='checkbox'
					id='inset'
					onChange={event => setBoxShadowInset(event.target.checked)}
				/>
				<StyledLabel htmlFor='inset'>Inset</StyledLabel>
			</StyledInputs>

			<Text>box-shadow: {boxShadowValues}</Text>
			<StyledBoxShadowBox
				$boxShadowX={boxShadowX}
				$boxShadowY={boxShadowY}
				$boxShadowBlur={boxShadowBlur}
				$boxShadowSpread={boxShadowSpread}
				$boxShadowColor={boxShadowColor}
				$boxShadowInset={boxShadowInset}
			/>
		</>
	);
};

const getBoxShadowValues = (x, y, blur, spread, color, inset) => {
	let values = '';

	// Agregar valores de posición (x, y) en el caso de que sean mayores de 0 agregar el string 'px'
	values += `${x === '0' ? x : x + 'px'}`;
	values += ' ' + `${y === '0' ? y : y + 'px'}`;

	if (blur !== '0') {
		values += ' ' + `${blur}px`;
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
