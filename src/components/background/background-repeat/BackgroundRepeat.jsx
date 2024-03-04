import { useState } from 'react';
import {
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledText
} from '../../../styles/common';
import { StyledBackgroundBox } from '../background.common.styles';

const BackgroundRepeat = () => {
	const [backgroundRepeat, setBackgroundRepeat] = useState('repeat');
	return (
		<>
			<h2>Background Repeat</h2>
			<StyledInputs $rows={4}>
				<div>
					<StyledInput
						type='radio'
						id='repeat'
						name='background-repeat'
						defaultChecked
						onChange={() => setBackgroundRepeat('repeat')}
					/>
					<StyledLabel htmlFor='repeat'>repeat</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='no-repeat'
						name='background-repeat'
						onChange={() => setBackgroundRepeat('no-repeat')}
					/>
					<StyledLabel htmlFor='no-repeat'>no-repeat</StyledLabel>
				</div>
				<div>
					<StyledInput
						type='radio'
						id='repeat-x'
						name='background-repeat'
						onChange={() => setBackgroundRepeat('repeat-x')}
					/>
					<StyledLabel htmlFor='repeat-x'>repeat-x</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='repeat-y'
						name='background-repeat'
						onChange={() => setBackgroundRepeat('repeat-y')}
					/>
					<StyledLabel htmlFor='repeat-y'>repeat-y</StyledLabel>
				</div>
			</StyledInputs>
			{backgroundRepeat === 'repeat' && (
				<StyledText>
					El valor repeat es el valor por defecto, el background se repetirá
					para rellenar todo el contenedor, tanto horizontal como verticalmente
				</StyledText>
			)}
			{backgroundRepeat === 'no-repeat' && (
				<StyledText>
					El valor no-repeat hará que el background sólo se pinte una vez, sin
					repetirse y ocupando lo que mida la imagen en su formato y proporción
					original.
				</StyledText>
			)}
			{backgroundRepeat === 'repeat-x' && (
				<StyledText>
					El valor repeat-x hará que el background se repita sólo en el eje x.
				</StyledText>
			)}
			{backgroundRepeat === 'repeat-y' && (
				<StyledText>
					El valor repeat-y hará que el background se repita sólo en el eje y.
				</StyledText>
			)}
			<StyledBackgroundBox $backgroundRepat={backgroundRepeat} />
		</>
	);
};

export default BackgroundRepeat;
