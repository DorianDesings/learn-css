import { useState } from 'react';
import { COLORS } from '../../../styles/colors';
import {
	StyledInputColor,
	StyledInputsContainer
} from '../../../styles/form-elements/inputs/inputs.styles';
import {
	StyledInputRadio,
	StyledInputRadioSecondary,
	StyledLabel
} from '../../../styles/form-elements/radio-buttons/radio-buttons.styles';
import { StyledText } from '../../../styles/texts/texts';
import BackgroundBox from '../background-box/BackgroundBox';

const Introduction = () => {
	const [backgroundType, setBackgroundType] = useState('color');
	const [color, setColor] = useState(COLORS.backgroundAlternate);
	const [image, setImage] = useState(null);
	console.log(image);
	return (
		<>
			<h2>Introducción a Background</h2>
			<StyledText>
				La propiedad background sirve para establecer el contenido y el
				comportamiento del fondo de un contenedor. El fondo de un elemento es el
				tamaño total del mismo sin incluir el margen, es decir, el contenido, el
				padding y el borde.
			</StyledText>
			<StyledInputsContainer $rows={5}>
				<StyledInputRadio
					type='radio'
					name='background-type'
					id='color'
					value={color}
					defaultChecked={true}
					onChange={() => {
						setBackgroundType('color');
						setImage(null);
					}}
				/>
				<StyledLabel htmlFor='color'>Color</StyledLabel>
				<StyledInputRadio
					type='radio'
					name='background-type'
					id='image'
					onChange={() => {
						setBackgroundType('image');
						setImage('/images/dorian.jpg');
					}}
				/>
				<StyledLabel htmlFor='image'>Image</StyledLabel>
				{backgroundType === 'color' && (
					<StyledInputColor
						type='color'
						value={color}
						onInput={event => setColor(event.target.value)}
					/>
				)}
				{backgroundType === 'image' && (
					<>
						<StyledInputRadioSecondary
							type='radio'
							name='image-type'
							id='jpg'
							defaultChecked
							onChange={() => setImage('/images/dorian.jpg')}
						/>
						<StyledLabel htmlFor='jpg'>JPG</StyledLabel>

						<StyledInputRadioSecondary
							type='radio'
							name='image-type'
							id='png'
							onChange={() => setImage('/images/dorian.png')}
						/>
						<StyledLabel htmlFor='png'>PNG</StyledLabel>

						<StyledInputRadioSecondary
							type='radio'
							name='image-type'
							id='gif'
							onChange={() => setImage('/images/cat.gif')}
						/>
						<StyledLabel htmlFor='gif'>GIF</StyledLabel>
					</>
				)}
			</StyledInputsContainer>
			<BackgroundBox $color={color} $image={image} />
		</>
	);
};

export default Introduction;
