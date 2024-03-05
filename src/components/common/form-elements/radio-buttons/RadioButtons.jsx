import { StyledInput, StyledInputs, StyledLabel } from './radio-buttons.styles';

const RadioButtons = () => {
	return (
		<StyledInputs $rows={6}>
			<div>
				<StyledInput
					type='radio'
					id='start'
					name='flex-status'
					defaultChecked
				/>
				<StyledLabel htmlFor='start'>Start</StyledLabel>
			</div>
		</StyledInputs>
	);
};

export default RadioButtons;
