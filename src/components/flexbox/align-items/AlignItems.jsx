import { useState } from 'react';
import { justifyContentAnimation } from '../../../constants/animations';
import {
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledText,
	StyledTextSmall
} from '../../../styles/common';
import { SIZES } from '../../../styles/sizes';
import AxisArrow from '../axis-arrow/AxisArrow';
import {
	StyledBox,
	StyledFlexContainer,
	StyledSpanWidth,
	StyledTextBaseline
} from '../styles';

const AlignItems = () => {
	const [flexDirection, setFlexDirection] = useState('row');
	const [alignItems, setAlignItems] = useState('stretch');
	return (
		<>
			<h2>Align Items</h2>
			<StyledText>
				La propiedad align items nos permite alinear los elementos en el eje
				secundario.
			</StyledText>

			<h4>Eje Principal</h4>
			<StyledInputs $rows={4}>
				<div>
					<StyledInput
						type='radio'
						id='justify-row'
						name='justify-flex-direction'
						defaultChecked
						onChange={() => setFlexDirection('row')}
					/>
					<StyledLabel htmlFor='justify-row'>Row</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='justify-column'
						name='justify-flex-direction'
						onChange={() => setFlexDirection('column')}
					/>
					<StyledLabel htmlFor='justify-column'>Column</StyledLabel>
				</div>
				<div>
					<StyledInput
						type='radio'
						id='justify-row-reverse'
						name='justify-flex-direction'
						onChange={() => setFlexDirection('row-reverse')}
					/>
					<StyledLabel htmlFor='justify-row-reverse'>Row reverse</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='justify-column-reverse'
						name='justify-flex-direction'
						onChange={() => setFlexDirection('column-reverse')}
					/>
					<StyledLabel htmlFor='justify-column-reverse'>
						Column reverse
					</StyledLabel>
				</div>
			</StyledInputs>

			<h4>Eje Secundario</h4>
			<StyledInputs $rows={5}>
				<div>
					<StyledInput
						type='radio'
						id='align-stretch'
						name='align-items'
						defaultChecked
						onChange={() => setAlignItems('stretch')}
					/>
					<StyledLabel htmlFor='align-stretch'>Stretch</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='align-start'
						name='align-items'
						onChange={() => setAlignItems('start')}
					/>
					<StyledLabel htmlFor='align-start'>Start</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='align-center'
						name='align-items'
						onChange={() => setAlignItems('center')}
					/>
					<StyledLabel htmlFor='align-center'>Center</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='align-end'
						name='align-items'
						onChange={() => setAlignItems('end')}
					/>
					<StyledLabel htmlFor='align-end'>End</StyledLabel>
				</div>
				<div>
					<StyledInput
						type='radio'
						id='baseline'
						name='align-items'
						onChange={() => setAlignItems('baseline')}
					/>
					<StyledLabel htmlFor='baseline'>Baseline</StyledLabel>
				</div>
			</StyledInputs>
			{alignItems === 'stretch' && (
				<StyledText>
					El valor stretch es el valor por defecto, los elementos sin un tamaño
					declarado, (width o height dependiendo de la dirección del eje
					principal) crecerán todo lo que puedan a lo largo del eje secundario.
				</StyledText>
			)}
			{alignItems === 'start' && (
				<StyledText>
					El valor start alinea el contenido al principio del eje secundario.
				</StyledText>
			)}
			{alignItems === 'center' && (
				<StyledText>
					El valor center alinea el contenido en el centro del eje secundario.
				</StyledText>
			)}
			{alignItems === 'end' && (
				<StyledText>
					El valor end alinea el contenido al final del eje secundario.
				</StyledText>
			)}
			{alignItems === 'baseline' && (
				<>
					<StyledText>
						El valor baseline cuando tenemos elementos con diferentes alturas,
						ajustará el elemento para alinearse en una disposición en la que las
						líneas de texto de cada elemento estén alineadas.
					</StyledText>
					<StyledTextSmall>
						* Baseline funciona tanto en fila como en columna, pero su uso más
						común es en row y row-reverse
					</StyledTextSmall>
				</>
			)}
			<AxisArrow flexDirection={flexDirection} />

			<StyledFlexContainer $direction={flexDirection} $align={alignItems}>
				<StyledBox layout transition={justifyContentAnimation}>
					<StyledTextBaseline>UNO</StyledTextBaseline>
				</StyledBox>

				<StyledBox layout transition={justifyContentAnimation}>
					<StyledTextBaseline>DOS</StyledTextBaseline>
				</StyledBox>

				<StyledBox layout transition={justifyContentAnimation}>
					<StyledTextBaseline>TRES</StyledTextBaseline>
				</StyledBox>
			</StyledFlexContainer>
			<StyledSpanWidth>{SIZES.containerWidth}px</StyledSpanWidth>
		</>
	);
};

export default AlignItems;
