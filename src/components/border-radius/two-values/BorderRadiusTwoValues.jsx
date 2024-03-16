import {
	StyledFormField,
	StyledGenericInput
} from '../../../styles/form-elements/inputs/inputs.styles';
import { StyledFlexContainer } from '../../../styles/section/sections.styles';

const BorderRadiusTwoValues = ({ ellipseTwoValues, setEllipseTwoValues }) => {
	return (
		<>
			<StyledFlexContainer>
				<StyledFormField>
					<label htmlFor='range-one-value'>Radio A de la elipse A</label>
					<StyledGenericInput
						type='range'
						id='x-value-a'
						name='xValueA'
						min={0}
						max={75}
						value={ellipseTwoValues.xValueA}
						onInput={event =>
							setEllipseTwoValues({
								...ellipseTwoValues,
								xValueA: event.target.value,
								yValueA: event.target.value
							})
						}
					/>
				</StyledFormField>
				<StyledFormField>
					<label htmlFor='range-one-value'>Radio B de la elipse A</label>
					<StyledGenericInput
						type='range'
						id='y-value-a'
						name='yValueA'
						min={0}
						max={75}
						value={ellipseTwoValues.yValueA}
						onInput={event =>
							setEllipseTwoValues({
								...ellipseTwoValues,
								yValueA: event.target.value
							})
						}
					/>
				</StyledFormField>
			</StyledFlexContainer>
			<StyledFlexContainer>
				<StyledFormField>
					<label htmlFor='range-one-value'>Radio A de la elipse B</label>
					<StyledGenericInput
						type='range'
						id='x-value-b'
						name='xValueB'
						min={0}
						max={75}
						value={ellipseTwoValues.xValueB}
						onInput={event =>
							setEllipseTwoValues({
								...ellipseTwoValues,
								xValueB: event.target.value,
								yValueB: event.target.value
							})
						}
					/>
				</StyledFormField>
				<StyledFormField>
					<label htmlFor='range-one-value'>Radio B de la elipse B</label>
					<StyledGenericInput
						type='range'
						id='y-value-b'
						name='yValueB'
						min={0}
						max={75}
						value={ellipseTwoValues.yValueB}
						onInput={event =>
							setEllipseTwoValues({
								...ellipseTwoValues,
								yValueB: event.target.value
							})
						}
					/>
				</StyledFormField>
			</StyledFlexContainer>
		</>
	);
};

export default BorderRadiusTwoValues;
