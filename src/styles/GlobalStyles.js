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
		background-color: ${COLORS.background};
		color: aliceblue;
		font-family: 'Roboto', sans-serif;
		max-width: 1440px;
		margin-left: auto;
		margin-right: auto;
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
