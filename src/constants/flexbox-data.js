const JUSTIFY_CONTENT_TEXTS = {
	START:
		'La propiedad start es la propiedad por defecto, lo que hace flexbox es sumar todo el contenido que tiene el contenedor y colocarlo al principio del eje.',
	CENTER:
		'Esta propiedad calcula el ancho total del elemento y el tamaño de los elementos para dejar exactamente el mismo espacio a los lados.',
	END: 'La propiedad end funciona de forma inversa a start. Lo que hace flexbox es sumar todo el contenido que tiene el contenedor y colocarlo al final del eje.',
	SPACE_BETWEEN:
		'La propiedad space between coloca el primer elemento al principio del eje principal, el último elemento al final del eje principal y después reparte el espacio restante entre los elementos restantes dejando todos a la misma distancia unos de otros.',
	SPACE_AROUND:
		'La propiedad space around deja el mismo espacio entre elementos y la mitad de ese espacio al principio y al final del contenedor.',
	SPACE_EVENLY:
		'La propiedad space around deja el mismo espacio entre elementos y al principio y al final del contenedor.'
};

const getTotalSize = (...sizes) =>
	Math.round(sizes.reduce((acc, cur) => acc + cur));

const getCenterSize = (...sizes) => getTotalSize(...sizes) / 2;

export const FLEXBOX_DATA = {
	start: {
		TEXT: JUSTIFY_CONTENT_TEXTS.START,
		FORMULA:
			'La formula para alinear al principio del eje que sigue flexbox es totalWidth - totalContent',
		EQUATION: {
			LINE_ONE: (...sizes) =>
				`La medida total de nuestro contenido es ${sizes.join(
					' + '
				)} = ${getTotalSize(...sizes)}px`,
			LINE_TWO: (mainAxisSize, _, ...sizes) =>
				`En nuestro ejemplo el contenedor mide ${mainAxisSize}px y el contenido ${getTotalSize(
					...sizes
				)}px, lo que hace flexbox es generar un espacio de ${getTotalSize(
					...sizes
				)}px en la dirección del eje principal`
		}
	},
	center: {
		TEXT: JUSTIFY_CONTENT_TEXTS.CENTER,
		FORMULA:
			'La formula para centrar que sigue flexbox es (totalWidth - totalContent) / 2.',
		EQUATION: {
			LINE_ONE: (...sizes) =>
				`La medida total de nuestro contenido es ${sizes.join(
					' + '
				)} = ${getTotalSize(...sizes)}px`,
			LINE_TWO: (mainAxisSize, _, ...sizes) =>
				`En nuestro ejemplo es (${mainAxisSize}px - ${getTotalSize(
					...sizes
				)}px) / 2, lo que hace flexbox es generar un espacio de ${getCenterSize(
					...sizes
				)}px a cada lado del contenido para conseguir un centrado perfecto.`
		}
	},
	end: {
		TEXT: JUSTIFY_CONTENT_TEXTS.END,
		FORMULA:
			'La formula para alinear al final del eje que sigue flexbox es totalWidth - totalContent',
		EQUATION: {
			LINE_ONE: (...sizes) =>
				`La medida total de nuestro contenido es ${sizes.join(
					' + '
				)} = ${getTotalSize(...sizes)}px`,
			LINE_TWO: (mainAxisSize, flexDirection, ...sizes) =>
				`En nuestro ejemplo el contenedor tiene un ${
					flexDirection === 'row' ? 'ancho' : 'alto'
				} de ${mainAxisSize}px y el contenido ocupa ${getTotalSize(
					...sizes
				)}px, lo que hace flexbox es generar un espacio de ${getTotalSize(
					...sizes
				)}px en la dirección contraria al eje principal`
		}
	},
	'space-between': {
		TEXT: JUSTIFY_CONTENT_TEXTS.SPACE_BETWEEN,
		FORMULA:
			'La formula para repartir el espacio es (totalWidth - widthOfRemainingItems) / numberOfItems - 1',
		EQUATION: {
			LINE_ONE: (...sizes) =>
				`La medida total de nuestro contenido es ${sizes.join(
					' + '
				)} = ${getTotalSize(...sizes)}px`,
			LINE_TWO: (mainAxisSize, ...sizes) =>
				`En nuestro ejemplo se traduce como (${mainAxisSize}px - ${getTotalSize(
					...sizes
				)}px) / (3 - 1), esto nos deja un espacio a de ${
					(mainAxisSize - getTotalSize(...sizes)) / 2
				}px entre elementos`
		}
	},
	'space-around': {
		TEXT: JUSTIFY_CONTENT_TEXTS.SPACE_AROUND,
		FORMULA:
			'La formula para repartir el espacio es (spaceWidth / 2) + totalElementsWidth + spaceWidth * (numberOfElements - 1) + (spaceWidth / 2) = totalWidth',
		EQUATION: {
			LINE_ONE: (...sizes) =>
				`La medida total de nuestro contenido es ${sizes.join(
					' + '
				)} = ${getTotalSize(...sizes)}px`,
			LINE_TWO: (mainAxisSize, ...sizes) =>
				`En nuestro ejemplo el espacio a repartir es de ${mainAxisSize}px - ${getTotalSize(
					...sizes
				)}px = ${
					mainAxisSize - getTotalSize(...sizes)
				}px. Si lo dividimos entre 3 tenemos un espacio entre elementos de ${
					(mainAxisSize - getTotalSize(...sizes)) / 3
				}px. Como en los extremos tiene que haber la mitad de espacio se dejan ${
					(mainAxisSize - getTotalSize(...sizes)) / 3 / 2
				}px a cada lado.`
		}
	},
	'space-evenly': {
		TEXT: JUSTIFY_CONTENT_TEXTS.SPACE_EVENLY,
		FORMULA:
			'La formula para repartir el espacio de forma equitativa es (totalWidth - remainingSpace) / (numberOfElements + 1)',
		EQUATION: {
			LINE_ONE: (...sizes) =>
				`La medida total de nuestro contenido es ${sizes.join(
					' + '
				)} = ${getTotalSize(...sizes)}px`,
			LINE_TWO: (mainAxisSize, ...sizes) =>
				`En nuestro ejemplo el espacio a repartir es de ${mainAxisSize}px - ${getTotalSize(
					...sizes
				)}px = ${
					mainAxisSize - getTotalSize(...sizes)
				}px. Si lo dividimos entre 4 tenemos un espacio entre elementos y en los extremos de ${
					(mainAxisSize - getTotalSize(...sizes)) / 4
				}px.`
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
