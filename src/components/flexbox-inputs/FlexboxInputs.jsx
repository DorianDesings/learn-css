import { StyledInput, StyledInputs, StyledLabel } from './styles';

const FlexboxInputs = ({ setFlexStatus }) => {
	return (
		<StyledInputs>
			<div>
				<StyledInput
					type='radio'
					id='start'
					name='flex-status'
					defaultChecked
					onChange={() => setFlexStatus('start')}
				/>
				<StyledLabel htmlFor='start'>Start</StyledLabel>
			</div>

			<div>
				<StyledInput
					type='radio'
					id='center'
					name='flex-status'
					onChange={() => setFlexStatus('center')}
				/>
				<StyledLabel htmlFor='center'>Center</StyledLabel>
			</div>
			<div>
				<StyledInput
					type='radio'
					id='end'
					name='flex-status'
					onChange={() => setFlexStatus('end')}
				/>
				<StyledLabel htmlFor='end'>End</StyledLabel>
			</div>
			<div>
				<StyledInput
					type='radio'
					id='space-between'
					name='flex-status'
					onChange={() => setFlexStatus('space-between')}
				/>
				<StyledLabel htmlFor='space-between'>Space Between</StyledLabel>
			</div>
			<div>
				<StyledInput
					type='radio'
					id='space-around'
					name='flex-status'
					onChange={() => setFlexStatus('space-around')}
				/>
				<StyledLabel htmlFor='space-around'>Space Around</StyledLabel>
			</div>
			<div>
				<StyledInput
					type='radio'
					id='space-evenly'
					name='flex-status'
					onChange={() => setFlexStatus('space-evenly')}
				/>
				<StyledLabel htmlFor='space-evenly'>Space Evenly</StyledLabel>
			</div>
		</StyledInputs>
	);
};

export default FlexboxInputs;
