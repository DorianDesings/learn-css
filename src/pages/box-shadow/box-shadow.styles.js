import styled from 'styled-components';

const StyledBoxShadowBox = styled.div.attrs(
	({ $boxShadowX, $boxShadowY, $boxShadowBlur, $boxShadowSpread }) => ({
		style: {
			boxShadow: `${$boxShadowX}px ${$boxShadowY}px ${$boxShadowBlur}px ${$boxShadowSpread}px`
		}
	})
)`
	width: 150px;
	height: 150px;
	background-color: orange;
`;

export { StyledBoxShadowBox };
