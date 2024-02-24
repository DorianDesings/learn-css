import { useState } from 'react';
import { displayAnimation } from '../../../constants/animations';
import {
	StyledInput,
	StyledInputs,
	StyledLabel,
	StyledText
} from '../../../styles/common';
import { StyledBox, StyledFlexContainer } from '../styles';

const FlexDirection = () => {
	const [flexDirection, setFlexDirection] = useState('row');
	return (
		<>
			<h2>Flex Direction</h2>
			<StyledText>
				La propiedad Flex Direction nos permite controlar la direción del eje
				principal, por defecto es row, y el eje se situa de izquierda a derecha
				de forma horizontal.
			</StyledText>

			<StyledInputs>
				<div>
					<StyledInput
						type='radio'
						id='row'
						name='flex-direction'
						defaultChecked
						onChange={() => setFlexDirection('row')}
					/>
					<StyledLabel htmlFor='row'>Row</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='column'
						name='flex-direction'
						onChange={() => setFlexDirection('column')}
					/>
					<StyledLabel htmlFor='column'>Column</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='row-reverse'
						name='flex-direction'
						onChange={() => setFlexDirection('row-reverse')}
					/>
					<StyledLabel htmlFor='row-reverse'>Row Reverse</StyledLabel>
				</div>

				<div>
					<StyledInput
						type='radio'
						id='column-reverse'
						name='flex-direction'
						onChange={() => setFlexDirection('column-reverse')}
					/>
					<StyledLabel htmlFor='column-reverse'>Column Reverse</StyledLabel>
				</div>
			</StyledInputs>

			<StyledFlexContainer $direction={flexDirection}>
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

export default FlexDirection;
