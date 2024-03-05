export const BACKGROUND_POSITION_X_INPUTS = [
	{
		id: 'left',
		value: 'left',
		type: 'radio',
		name: 'background-position-x',
		defaultChecked: true
	},
	{
		id: 'center-x',
		value: 'center',
		type: 'radio',
		name: 'background-position-x',
		defaultChecked: false
	},
	{
		id: 'right',
		value: 'right',
		type: 'radio',
		name: 'background-position-x',
		defaultChecked: false
	}
];

export const BACKGROUND_POSITION_Y_INPUTS = [
	{
		id: 'top',
		value: 'top',
		type: 'radio',
		name: 'background-position-y',
		defaultChecked: true
	},
	{
		id: 'center-y',
		value: 'center',
		type: 'radio',
		name: 'background-position-y',
		defaultChecked: false
	},
	{
		id: 'bottom',
		value: 'bottom',
		type: 'radio',
		name: 'background-position-y',
		defaultChecked: false
	}
];

export const BACKGROUND_POSITION_TEXTS = {
	repeat:
		'El valor repeat es el valor por defecto, el background se repetirá para rellenar todo el contenedor, tanto horizontal como verticalmente.',
	'no-repeat':
		'El valor no-repeat hará que el background sólo se pinte una vez, sin repetirse y ocupando lo que mida la imagen en su formato y proporción original.',
	'repeat-x':
		'El valor repeat-x hará que el background se repita sólo en el eje x.',
	'repeat-y':
		'El valor repeat-x hará que el background se repita sólo en el eje y.'
};
