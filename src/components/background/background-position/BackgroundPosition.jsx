import { useState } from 'react';
import {
	BACKGROUND_POSITION_X_INPUTS,
	BACKGROUND_POSITION_Y_INPUTS
} from '../../../constants/background/background-position-data';

import {
	StyledInputRadio,
	StyledInputsContainer,
	StyledLabelRadio
} from '../../common/form-elements/radio-buttons/radio-buttons.styles';
import { StyledText } from '../../common/text/text.styled';
import {
	StyledBackgroundBox,
	StyledNumberInput,
	StyledOption,
	StyledSelectValue
} from '../background.common.styles';

const BackgroundPosition = () => {
	// const [backgroundPositionX, setbackgroundPositionX] = useState('left');
	// const [backgroundPositionY, setbackgroundPositionY] = useState('top');
	const [bgPosition, setBgPosition] = useState({
		positionX: 'left',
		positionY: 'top',
		manualXValue: 0,
		manualXUnit: '%',
		manualYValue: 0,
		manualYUnit: '%'
	});
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
			<StyledInputsContainer $rows={6}>
				{BACKGROUND_POSITION_X_INPUTS.map(input => (
					<div key={input.id}>
						<StyledInputRadio
							{...input}
							onChange={() =>
								changeBgPosition(bgPosition, setBgPosition, input.id)
							}
						/>
						<StyledLabelRadio htmlFor={input.id}>
							{input.value}
						</StyledLabelRadio>
					</div>
				))}
				<StyledNumberInput
					type='number'
					value={bgPosition.manualXValue}
					onInput={event =>
						setBgPosition({ ...bgPosition, manualXValue: event.target.value })
					}
				/>
				<StyledSelectValue
					value={bgPosition.manualXUnit}
					onChange={event =>
						setBgPosition({ ...bgPosition, manualXUnit: event.target.value })
					}
				>
					<StyledOption value='%'>%</StyledOption>
					<StyledOption value='px'>px</StyledOption>
				</StyledSelectValue>
			</StyledInputsContainer>
			<StyledText>Eje Y</StyledText>
			<StyledInputsContainer $rows={5}>
				{BACKGROUND_POSITION_Y_INPUTS.map(input => (
					<div key={input.id}>
						<StyledInputRadio
							{...input}
							onChange={() =>
								changeBgPosition(bgPosition, setBgPosition, input.id)
							}
						/>
						<StyledLabelRadio htmlFor={input.id}>
							{input.value}
						</StyledLabelRadio>
					</div>
				))}

				<StyledNumberInput
					type='number'
					value={bgPosition.manualYValue}
					onInput={event =>
						setBgPosition({ ...bgPosition, manualYValue: event.target.value })
					}
				/>

				<StyledSelectValue
					value={bgPosition.manualYUnit}
					onChange={event =>
						setBgPosition({ ...bgPosition, manualYUnit: event.target.value })
					}
				>
					<StyledOption value='%'>%</StyledOption>
					<StyledOption value='px'>px</StyledOption>
				</StyledSelectValue>
			</StyledInputsContainer>

			<StyledBackgroundBox
				$bgPositionX={bgPosition.manualXValue}
				$bgPositionY={bgPosition.manualYValue}
				$bgPositionXUnit={bgPosition.manualXUnit}
				$bgPositionYUnit={bgPosition.manualYUnit}
			/>
		</>
	);
};

const changeBgPosition = (bgPosition, setBgPosition, value) => {
	switch (value) {
		case 'left':
			setBgPosition({
				...bgPosition,
				positionX: 'left',
				manualXValue: 0,
				manualXUnit: '%'
			});
			break;
		case 'center-x':
			setBgPosition({
				...bgPosition,
				positionX: 'center',
				manualXValue: 50,
				manualXUnit: '%'
			});
			break;
		case 'right':
			setBgPosition({
				...bgPosition,
				positionX: 'right',
				manualXValue: 100,
				manualXUnit: '%'
			});
			break;
		case 'top':
			setBgPosition({
				...bgPosition,
				positionY: 'top',
				manualYValue: 0,
				manualYUnit: '%'
			});
			break;
		case 'center-y':
			setBgPosition({
				...bgPosition,
				positionY: 'center',
				manualYValue: 50,
				manualYUnit: '%'
			});
			break;
		case 'bottom':
			setBgPosition({
				...bgPosition,
				positionY: 'bottom',
				manualYValue: 100,
				manualYUnit: '%'
			});
			break;

		default:
			break;
	}
};

export default BackgroundPosition;
