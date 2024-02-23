export const FLEXBOX_DATA = {
	start: {
		title: 'Start',
		text: 'La propiedad start es la propiedad por defecto. Lo que hace flexbox es sumar todo el contenido que tiene el contenedor y colocarlo al principio del eje.',
		equation: {
			lineOne: '(125px * 3) + (1rem * 2) = 407px',
			lineTwo:
				'La formula para alinear al principio del eje que sigue flexbox es totalWidth - totalContent',
			lineThree:
				'En nuestro ejemplo es 600px - 407px, Esto nos deja un espacio de 193px, lo que hace flexbox es generar un espacio de 193px desde el final del contenido hacia el lado en el que termine el eje principal'
		}
	},
	center: {
		title: 'Center',
		text: 'Esta propiedad calcula el ancho total del elemento y el tamaño de los elementos para dejar exactamente el mismo espacio a los lados. En este caso la fórmula que calcula se basa en 600px a repartir, 125px de cada caja y 1rem de separación entre cajas',
		equation: {
			lineOne: '(125px * 3) + (1rem * 2) = 407px',
			lineTwo:
				'La formula para centrar que sigue flexbox es (totalWidth - totalContent) / 2.',
			lineThree:
				'En nuestro ejemplo es (600px - 407px) / 2, lo cual nos deja un margen de 96.5px a cada lado, un centrado perfecto.'
		}
	},
	end: {
		title: 'End',
		text: 'La propiedad end funciona de forma inversa a start. Lo que hace flexbox es sumar todo el contenido que tiene el contenedor y colocarlo al final del eje.',
		equation: {
			lineOne: '(125px * 3) + (1rem * 2) = 407px',
			lineTwo:
				'La formula para alinear al final del eje que sigue flexbox es totalWidth - totalContent',
			lineThree:
				'En nuestro ejemplo es 600px - 407px, Esto nos deja un espacio de 193px, lo que hace flexbox es generar un espacio de 193px desde el principio del contenido hacia el lado en el que empiece el eje principal'
		}
	},
	'space-between': {
		title: 'Space Between',
		text: 'La propiedad start es la propiedad por defecto.'
	},
	'space-around': {
		title: 'Space Around',
		text: 'La propiedad start es la propiedad por defecto.'
	},
	'space-evenly': {
		title: ' Space Evenly',
		text: 'La propiedad start es la propiedad por defecto.'
	}
};
