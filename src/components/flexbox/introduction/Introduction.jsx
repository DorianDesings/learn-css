import { useState } from 'react';
import { displayAnimation } from '../../../constants/animations';
import {
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledText
} from '../../../styles/common';
import { StyledBox, StyledFlexContainer } from '../styles';

const Introduction = () => {
	const [flexDisplay, setFlexDisplay] = useState('block');
	return (
		<>
			<h2>Introducción a Flexbox</h2>
			<StyledText>
				Flexbox, o Flexible Box Layout, es un modelo de diseño en CSS que
				proporciona una forma eficiente y fácil de diseñar y distribuir
				elementos en un contenedor, incluso cuando el tamaño de esos elementos
				es desconocido o dinámico. Flexbox facilita la creación de diseños
				fluidos y alineación de elementos en una fila o columna, permitiendo que
				los elementos crezcan o se contraigan automáticamente para llenar el
				espacio disponible de manera uniforme.
			</StyledText>

			<StyledText>
				Para convertir un contenedor en un contenedor flexible usaremos la
				propiedad display con el valor flex.
			</StyledText>

			<StyledText>Los items tienen un width de 125px.</StyledText>

			<StyledInputs>
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

			<StyledFlexContainer $display={flexDisplay}>
				<StyledBox layout transition={displayAnimation}>
					1
				</StyledBox>
				<StyledBox layout transition={displayAnimation}>
					2
				</StyledBox>

				<StyledBox layout transition={displayAnimation}>
					3
				</StyledBox>
			</StyledFlexContainer>
		</>
	);
};

export default Introduction;
