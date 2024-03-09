import { useState } from 'react';
import { displayAnimation } from '../../../constants/animations';
import {
	StyledGenericInput,
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledSpanInfo,
	StyledTextSmall
} from '../../../styles/common';
import Text from '../../common/text/Text';
import { StyledBox, StyledFlexContainer } from './styles';

const Introduction = () => {
	const [flexDisplay, setFlexDisplay] = useState('block');
	const [boxWidth, setBoxWidth] = useState(125);
	const [isWidthAuto, setIsWidthAuto] = useState(true);
	return (
		<>
			<h2>Introducción a Flexbox</h2>
			<Text>
				Flexbox, o Flexible Box Layout, es un modelo de diseño en CSS que
				proporciona una forma eficiente y fácil de diseñar y distribuir
				elementos en un contenedor, incluso cuando el tamaño de esos elementos
				es desconocido o dinámico. Flexbox facilita la creación de diseños
				fluidos y alineación de elementos en una fila o columna, permitiendo que
				los elementos crezcan o se contraigan automáticamente para llenar el
				espacio disponible de manera uniforme.
			</Text>

			<Text>
				Para convertir un contenedor en un contenedor flexible usaremos la
				propiedad display con el valor flex.
			</Text>

			<StyledInputs>
				<span>Display: </span>
				<div>
					<StyledInput
						type='radio'
						id='block'
						name='flex-display'
						defaultChecked
						onChange={() => setFlexDisplay('block')}
					/>
					<StyledLabel htmlFor='block'>Block</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='flex'
						name='flex-display'
						onChange={() => setFlexDisplay('flex')}
					/>
					<StyledLabel htmlFor='flex'>Flex</StyledLabel>
				</div>
			</StyledInputs>
			<div>
				<StyledSpanInfo>Width:</StyledSpanInfo>
				<span htmlFor='flex'>Auto</span>
				<StyledGenericInput
					type='checkbox'
					id='width'
					name='width'
					checked={isWidthAuto}
					onChange={event => setIsWidthAuto(event.target.checked)}
				/>

				<StyledGenericInput
					type='range'
					min={100}
					max={200}
					defaultValue={125}
					disabled={isWidthAuto}
					onInput={event => setBoxWidth(event.target.value)}
				/>
			</div>

			{flexDisplay === 'block' && isWidthAuto && (
				<StyledTextSmall>
					Con display block y width auto los elementos ocupan el 100% del
					contenedor
				</StyledTextSmall>
			)}

			{flexDisplay === 'block' && !isWidthAuto && (
				<StyledTextSmall>
					Con display block y un width declarado los elementos ocupan {boxWidth}
					px.
				</StyledTextSmall>
			)}

			{flexDisplay === 'flex' && isWidthAuto && (
				<StyledTextSmall>
					Con display flex y un width auto los elementos sólo ocupan lo que
					ocupa su contenido
				</StyledTextSmall>
			)}

			{flexDisplay === 'flex' && !isWidthAuto && (
				<StyledTextSmall>
					Con display flex y un width declarado los elementos ocupan {boxWidth}
					px
				</StyledTextSmall>
			)}

			<StyledFlexContainer $display={flexDisplay}>
				<StyledBox
					layout
					transition={displayAnimation}
					$boxWidth={boxWidth}
					$isWidthAuto={isWidthAuto}
				>
					1
				</StyledBox>
				<StyledBox
					layout
					transition={displayAnimation}
					$boxWidth={boxWidth}
					$isWidthAuto={isWidthAuto}
				>
					DOS
				</StyledBox>

				<StyledBox
					layout
					transition={displayAnimation}
					$boxWidth={boxWidth}
					$isWidthAuto={isWidthAuto}
				>
					3
				</StyledBox>
			</StyledFlexContainer>
		</>
	);
};

export default Introduction;
