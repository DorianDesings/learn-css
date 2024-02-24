import { JUSTIFY_CONTENT_VALUES } from '../../../constants/flexbox-data';
import { StyledInput, StyledInputs, StyledLabel } from '../../../styles/common';

const JustifyContentInputs = ({ setJustifyContent }) => {
	return (
		<StyledInputs>
			<div>
				<StyledInput
					type='radio'
					id='start'
					name='flex-status'
					defaultChecked
					onChange={() => setJustifyContent(JUSTIFY_CONTENT_VALUES.START)}
				/>
				<StyledLabel htmlFor='start'>Start</StyledLabel>
			</div>

			<div>
				<StyledInput
					type='radio'
					id='center'
					name='flex-status'
					onChange={() => setJustifyContent(JUSTIFY_CONTENT_VALUES.CENTER)}
				/>
				<StyledLabel htmlFor='center'>Center</StyledLabel>
			</div>
			<div>
				<StyledInput
					type='radio'
					id='end'
					name='flex-status'
					onChange={() => setJustifyContent(JUSTIFY_CONTENT_VALUES.END)}
				/>
				<StyledLabel htmlFor='end'>End</StyledLabel>
			</div>
			<div>
				<StyledInput
					type='radio'
					id='space-between'
					name='flex-status'
					onChange={() =>
						setJustifyContent(JUSTIFY_CONTENT_VALUES.SPACE_BETWEEN)
					}
				/>
				<StyledLabel htmlFor='space-between'>Space Between</StyledLabel>
			</div>
			<div>
				<StyledInput
					type='radio'
					id='space-around'
					name='flex-status'
					onChange={() =>
						setJustifyContent(JUSTIFY_CONTENT_VALUES.SPACE_AROUND)
					}
				/>
				<StyledLabel htmlFor='space-around'>Space Around</StyledLabel>
			</div>
			<div>
				<StyledInput
					type='radio'
					id='space-evenly'
					name='flex-status'
					onChange={() =>
						setJustifyContent(JUSTIFY_CONTENT_VALUES.SPACE_EVENLY)
					}
				/>
				<StyledLabel htmlFor='space-evenly'>Space Evenly</StyledLabel>
			</div>
		</StyledInputs>
	);
};

export default JustifyContentInputs;
