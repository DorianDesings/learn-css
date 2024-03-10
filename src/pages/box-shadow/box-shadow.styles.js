import styled from 'styled-components';

const StyledBoxShadowBox = styled.div.attrs(
	({
		$boxShadowX,
		$boxShadowY,
		$boxShadowBlur,
		$boxShadowSpread,
		$boxShadowColor,
		$boxShadowInset
	}) => ({
		style: {
			boxShadow: `${$boxShadowX}px ${$boxShadowY}px ${$boxShadowBlur}px ${$boxShadowSpread}px ${$boxShadowColor} ${
				$boxShadowInset ? 'inset' : ''
			}`
		}
	})
)`
	width: 150px;
	height: 150px;
	margin-top: 2rem;
	background-color: orange;
`;

export { StyledBoxShadowBox };
