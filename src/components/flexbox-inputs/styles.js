import styled from 'styled-components';

const StyledInputs = styled.div`
	display: flex;
	justify-content: space-between;
	width: 600px;
	margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
	padding: 0.5rem;
	border: 1px solid white;
	border-radius: 0.5rem;
	width: 100px;
`;

const StyledInput = styled.input`
	display: none;

	&:checked + ${StyledLabel} {
		background-color: orange;
		color: #111;
	}
`;

export { StyledInput, StyledInputs, StyledLabel };
