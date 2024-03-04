import { useState } from 'react';
import {
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledText
} from '../../../styles/common';
import {
	StyledBackgroundBox,
	StyledNumberInput,
	StyledOption,
	StyledSelectValue
} from '../background.common.styles';

const BackgroundPosition = () => {
	const [backgroundPositionX, setbackgroundPositionX] = useState('left');
	const [backgroundPositionY, setbackgroundPositionY] = useState('top');
	return (
		<>
			<h2>Background Position</h2>
			<StyledText>
				Esta propiedad nos permite mover una imagen de fondo dentro de su
				contenedor, por defecto sus valores son 0 0, que corresponden a la
				esquina superior izquierda, el primer valor corresponde al eje x y el
				segundo al eje y.
			</StyledText>
			<StyledText>Eje X</StyledText>
			<StyledInputs $rows={6}>
				<div>
					<StyledInput
						type='radio'
						id='left'
						name='background-position-x'
						defaultChecked
						onChange={() => setbackgroundPositionX('left')}
					/>
					<StyledLabel htmlFor='left'>left</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='center-x'
						name='background-position-x'
						onChange={() => setbackgroundPositionX('center')}
					/>
					<StyledLabel htmlFor='center-x'>center</StyledLabel>
				</div>
				<div>
					<StyledInput
						type='radio'
						id='right'
						name='background-position-x'
						onChange={() => setbackgroundPositionX('right')}
					/>
					<StyledLabel htmlFor='right'>right</StyledLabel>
				</div>
				<div>
					<StyledNumberInput type='number' placeholder='100' />
				</div>
				<div>
					<StyledSelectValue name='value-x' id='value-x'>
						<StyledOption value='px'>px</StyledOption>
						<StyledOption value='%'>%</StyledOption>
					</StyledSelectValue>
				</div>
			</StyledInputs>

			<StyledText>Eje Y</StyledText>
			<StyledInputs>
				<div>
					<StyledInput
						type='radio'
						id='top'
						name='background-position-y'
						defaultChecked
						onChange={() => setbackgroundPositionY('top')}
					/>
					<StyledLabel htmlFor='top'>top</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='center-y'
						name='background-position-y'
						onChange={() => setbackgroundPositionY('center')}
					/>
					<StyledLabel htmlFor='center-y'>center</StyledLabel>
				</div>
				<div>
					<StyledInput
						type='radio'
						id='bottom'
						name='background-position-y'
						onChange={() => setbackgroundPositionY('bottom')}
					/>
					<StyledLabel htmlFor='bottom'>bottom</StyledLabel>
				</div>
			</StyledInputs>

			<StyledBackgroundBox
				$backgroundPositionX={backgroundPositionX}
				$backgroundPositionY={backgroundPositionY}
			/>
		</>
	);
};

export default BackgroundPosition;
