import { useState } from 'react';
import { displayAnimation } from '../../../constants/animations';
import {
	StyledHightlight,
	StyledInput,
	StyledInputs,
	StyledLabel
} from '../../../styles/common';
import Text from '../../common/text/Text';
import AxisArrow from '../axis-arrow/AxisArrow';
import { StyledBox, StyledFlexContainer } from '../styles';

const FlexDirection = () => {
	const [flexDirection, setFlexDirection] = useState('row');
	return (
		<>
			<h2>Flex Direction</h2>
			<Text>
				La propiedad Flex Direction nos permite controlar la direción del eje
				principal (main axis). El eje secundario (cross axis) siempre será
				perpendicular al eje principal y <StyledHightlight>NO</StyledHightlight>{' '}
				podremos cambiar su dirección
			</Text>
			<Text>Su valor por defecto es row</Text>
			<StyledInputs $rows={4}>
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

			<AxisArrow flexDirection={flexDirection} />

			<StyledFlexContainer $direction={flexDirection}>
				<StyledBox layout transition={displayAnimation}>
					1
				</StyledBox>
				<StyledBox layout transition={displayAnimation}>
					Dos
				</StyledBox>

				<StyledBox layout transition={displayAnimation}>
					3
				</StyledBox>
			</StyledFlexContainer>
		</>
	);
};

export default FlexDirection;
