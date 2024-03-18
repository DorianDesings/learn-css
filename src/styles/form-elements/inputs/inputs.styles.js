import styled from 'styled-components';
import { COLORS } from '../../colors';

const StyledFormField = styled.div`
	display: flex;
	gap: 0.5rem;
	flex-direction: column;
`;

const StyledInputsContainer = styled.div`
	display: grid;
	gap: 1rem;
	width: fit-content;
	margin-bottom: 1rem;

	@media screen and (width>768px) {
		grid-template-columns: repeat(${({ $rows }) => $rows || 3}, max-content);
	}
`;

const StyledGenericInput = styled.input`
	accent-color: ${COLORS.primary};
	margin: 0;
	margin-right: 1rem;
`;

const StyledNumberInput = styled.input`
	width: 75px;
	height: 46px;
	background-color: transparent;
	color: ${COLORS.primary};
	font-size: 1.2rem;
	padding-left: 1rem;
	border: 1px solid;
`;

const StyledInputColor = styled.input`
	height: 46px;
	border: none;
	padding: 0;
	border-radius: 1rem;
	margin-bottom: 0.5rem;
`;

const StyledSelect = styled.select`
	width: 65px;
	height: 46px;
	background-color: ${COLORS.background};
	color: ${COLORS.primary};
	font-size: 1.2rem;
	padding-inline: 0.5rem;
	border: 1px solid ${COLORS.primary};
`;
const StyledOption = styled.option``;

export {
	StyledFormField,
	StyledGenericInput,
	StyledInputColor,
	StyledInputsContainer,
	StyledNumberInput,
	StyledOption,
	StyledSelect
};
