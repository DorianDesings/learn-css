import styled from 'styled-components';
import { COLORS } from '../colors';

const StyledSection = styled.section`
	display: grid;
	align-items: ${({ $align }) => $align || 'start'};
	justify-items: ${({ $justify }) => $justify || 'start'};
	gap: 2rem;

	@media screen and (width > 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

const StyledBoxBackgroundAlternate = styled.div`
	width: 100%;
	text-align: center;
	font-size: 1.25rem;
	padding: 2rem;
	background-color: ${COLORS.backgroundAlternate};
`;

const StyledFlexContainer = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
	margin-block: 1rem;
`;

export { StyledBoxBackgroundAlternate, StyledFlexContainer, StyledSection };
