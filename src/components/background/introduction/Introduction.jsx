import { useState } from 'react';
import { COLORS } from '../../../styles/colors';
import { StyledInputColor } from '../../common/form-elements/inputs/inputs.styles';
import {
	StyledInputRadio,
	StyledInputRadioSecondary,
	StyledInputsContainer,
	StyledLabelRadio,
	StyledLabelRadioSecondary
} from '../../common/form-elements/radio-buttons/radio-buttons.styles';
import Text from '../../common/text/Text';
import BackgroundBox from '../background-box/BackgroundBox';

const Introduction = () => {
	const [backgroundType, setBackgroundType] = useState('color');
	const [color, setColor] = useState(COLORS.backgroundAlternate);
	const [image, setImage] = useState(null);
	console.log(image);
	return (
		<>
			<h2>Introducción a Background</h2>
			<Text>
				La propiedad background sirve para establecer el contenido y el
				comportamiento del fondo de un contenedor. El fondo de un elemento es el
				tamaño total del mismo sin incluir el margen, es decir, el contenido, el
				padding y el borde.
			</Text>
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
				<StyledLabelRadio htmlFor='color'>Color</StyledLabelRadio>
				<StyledInputRadio
					type='radio'
					name='background-type'
					id='image'
					onChange={() => {
						setBackgroundType('image');
						setImage('/images/dorian.jpg');
					}}
				/>
				<StyledLabelRadio htmlFor='image'>Image</StyledLabelRadio>
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
						<StyledLabelRadioSecondary htmlFor='jpg'>
							JPG
						</StyledLabelRadioSecondary>

						<StyledInputRadioSecondary
							type='radio'
							name='image-type'
							id='png'
							onChange={() => setImage('/images/dorian.png')}
						/>
						<StyledLabelRadioSecondary htmlFor='png'>
							PNG
						</StyledLabelRadioSecondary>

						<StyledInputRadioSecondary
							type='radio'
							name='image-type'
							id='gif'
							onChange={() => setImage('/images/cat.gif')}
						/>
						<StyledLabelRadioSecondary htmlFor='gif'>
							GIF
						</StyledLabelRadioSecondary>
					</>
				)}
			</StyledInputsContainer>
			<BackgroundBox $color={color} $image={image} />
		</>
	);
};

export default Introduction;
