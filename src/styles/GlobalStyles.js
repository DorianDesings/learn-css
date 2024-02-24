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
		padding-top: 50px;
	  font-family: "Sriracha", cursive;
		font-weight: 400;
		font-style: normal;
		font-size:20px;
		max-width: 1440px;
		margin-left: auto;
		margin-right: auto;
		color: aliceblue;
		background-color: ${COLORS.background};
		user-select:none;
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
`;
