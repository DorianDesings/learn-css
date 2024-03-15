import {
	StyledFormField,
	StyledGenericInput
} from '../../../styles/form-elements/inputs/inputs.styles';
import { StyledFlexContainer } from '../../../styles/section/sections.styles';

const BorderRadiusOneValue = ({ ellipseOneValue, setEllipseOneValue }) => {
	return (
		<StyledFlexContainer>
			<StyledFormField>
				<label htmlFor='range-one-value'>Radio A de la elipse</label>
				<StyledGenericInput
					type='range'
					id='x-value'
					name='xValue'
					min={0}
					max={75}
					value={ellipseOneValue.xValue}
					onInput={event =>
						setEllipseOneValue({
							xValue: event.target.value,
							yValue: event.target.value
						})
					}
				/>
			</StyledFormField>
			<StyledFormField>
				<label htmlFor='range-one-value'>Radio B de la elipse</label>
				<StyledGenericInput
					type='range'
					id='y-value'
					name='yValue'
					min={0}
					max={75}
					value={ellipseOneValue.yValue}
					onInput={event =>
						setEllipseOneValue({
							...ellipseOneValue,
							yValue: event.target.value
						})
					}
				/>
			</StyledFormField>
		</StyledFlexContainer>
	);
};

export default BorderRadiusOneValue;
