const JUSTIFY_CONTENT_TITLES = {
	START: 'Start',
	CENTER: 'Center',
	END: 'End',
	SPACE_BETWEEN: 'Space Between',
	SPACE_AROUND: 'Space Around',
	SPACE_EVENLY: 'Space Evenly'
};

const JUSTIFY_CONTENT_TEXTS = {
	START:
		'La propiedad start es la propiedad por defecto. Lo que hace flexbox es sumar todo el contenido que tiene el contenedor y colocarlo al principio del eje.',
	CENTER:
		'Esta propiedad calcula el ancho total del elemento y el tamaño de los elementos para dejar exactamente el mismo espacio a los lados. En este caso la fórmula que calcula se basa en 600px a repartir, 125px de cada caja y 1rem de separación entre cajas',
	END: 'La propiedad end funciona de forma inversa a start. Lo que hace flexbox es sumar todo el contenido que tiene el contenedor y colocarlo al final del eje.',
	SPACE_BETWEEN:
		'La propiedad space between coloca el primer elemento al principio del eje principal, el último elemento al final del eje principal y después reparte el espacio restante entre los elementos restantes dejando todos a la misma distancia unos de otros.',
	SPACE_AROUND: 'La propiedad start es la propiedad por defecto.',
	SPACE_EVENLY: 'La propiedad start es la propiedad por defecto.'
};

export const FLEXBOX_DATA = {
	start: {
		TITLE: JUSTIFY_CONTENT_TITLES.START,
		TEXT: JUSTIFY_CONTENT_TEXTS.START,
		EQUATION: {
			LINE_ONE: '125px * 3 = 375px',
			LINE_TWO:
				'La formula para alinear al principio del eje que sigue flexbox es totalWidth - totalContent',
			LINE_THREE:
				'En nuestro ejemplo es 750px - 375px, Esto nos deja un espacio de 375px, lo que hace flexbox es generar un espacio de 375px desde el final del contenido hacia el lado en el que termine el eje principal'
		}
	},
	center: {
		TITLE: JUSTIFY_CONTENT_TITLES.CENTER,
		TEXT: JUSTIFY_CONTENT_TEXTS.CENTER,
		EQUATION: {
			LINE_ONE: '125px * 3  = 375px',
			LINE_TWO:
				'La formula para centrar que sigue flexbox es (totalWidth - totalContent) / 2.',
			LINE_THREE:
				'En nuestro ejemplo es (750px - 375px) / 2, lo cual nos deja un margen de 187.5px a cada lado, un centrado perfecto.'
		}
	},
	end: {
		TITLE: JUSTIFY_CONTENT_TITLES.END,
		TEXT: JUSTIFY_CONTENT_TEXTS.END,
		EQUATION: {
			LINE_ONE: '125px * 3 = 375px',
			LINE_TWO:
				'La formula para alinear al final del eje que sigue flexbox es totalWidth - totalContent',
			LINE_THREE:
				'En nuestro ejemplo es 750px - 375px, Esto nos deja un espacio de 375px, lo que hace flexbox es generar un espacio de 375px desde el principio del contenido hacia el lado en el que empiece el eje principal'
		}
	},
	'space-between': {
		TITLE: JUSTIFY_CONTENT_TITLES.SPACE_BETWEEN,
		TEXT: JUSTIFY_CONTENT_TEXTS.SPACE_BETWEEN,
		EQUATION: {
			LINE_ONE: '125px + X + 125px = 750px. X = 500px de espacio restante',
			LINE_TWO:
				'La formula para repartir el espacio es (totalWidth - widthOfRemainingItems) / numberOfItems - 1',
			LINE_THREE:
				'En nuestro ejemplo se traduce como (500px - 125px) / (3 - 1), esto nos deja un espacio a de 237.5px entre elementos'
		}
	},
	'space-around': {
		TITLE: JUSTIFY_CONTENT_TITLES.SPACE_AROUND,
		TEXT: JUSTIFY_CONTENT_TEXTS.SPACE_AROUND,
		EQUATION: {
			LINE_ONE: '125px * 3 = 375px',
			LINE_TWO:
				'La formula para repartir el espacio es (spaceWidth / 2) + totalElementsWidth + spaceWidth * (numberOfElements - 1) + (spaceWidth / 2) = totalWidth',
			LINE_THREE:
				'En nuestro ejemplo el espacio a repartir es de 375px para 3 elementos, esto nos deja un espacio de 125px entre elementos. Como en los extremos tiene que haber la mitad de espacio se dejan 62.5pxa cada lado.'
		}
	},
	'space-evenly': {
		TITLE: JUSTIFY_CONTENT_TITLES.SPACE_EVENLY,
		TEXT: JUSTIFY_CONTENT_TEXTS.SPACE_EVENLY,
		EQUATION: {
			LINE_ONE: '125px * 3 = 375px',
			LINE_TWO:
				'La formula para repartir el espacio de forma equitativa es (totalWidth - remainingSpace) / (numberOfElements + 1)',
			LINE_THREE:
				'En nuestro ejemplo es (750px - 375px) / (3 + 1), esto nos deja un espacio de 93.75px de espaciado tanto al principio, como entre los elementos y al final.'
		}
	}
};

export const JUSTIFY_CONTENT_VALUES = {
	START: 'start',
	CENTER: 'center',
	END: 'end',
	SPACE_BETWEEN: 'space-between',
	SPACE_AROUND: 'space-around',
	SPACE_EVENLY: 'space-evenly'
};
