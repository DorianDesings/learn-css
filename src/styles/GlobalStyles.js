import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const GlobalStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	img {
		display: block;
		max-width: 100%;
	}

	body {
		margin: 0;
		padding: 50px 2rem 0;
	  font-family: "Sriracha", cursive;
		font-size:16px;
		width: 100%;
		max-width: 1440px;
		margin-inline: auto;
		color: aliceblue;
		background-color: ${COLORS.background};
		user-select:none;
		
		@media screen and (width> 768px) {
			font-size: 18px;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input,
	button,
	textarea,
	select {
		font-family: inherit;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}

	ul {
		list-style: none;
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
	}

	input[type="color"]::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	input[type="color"]::-webkit-color-swatch {
		/* border: none; */
	}

	body > div{
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 50px);
	}
`;
