export const BACKGROUND_REPEAT_INPUTS = [
	{
		id: 'repeat',
		type: 'radio',
		name: 'background-repeat',
		defaultChecked: true
	},
	{
		id: 'no-repeat',
		type: 'radio',
		name: 'background-repeat',
		defaultChecked: false
	},
	{
		id: 'repeat-x',
		type: 'radio',
		name: 'background-repeat',
		defaultChecked: false
	},
	{
		id: 'repeat-y',
		type: 'radio',
		name: 'background-repeat',
		defaultChecked: false
	}
];

export const BACKGROUND_REPEAT_TEXTS = {
	repeat:
		'El valor repeat es el valor por defecto, el background se repetirá para rellenar todo el contenedor, tanto horizontal como verticalmente.',
	'no-repeat':
		'El valor no-repeat hará que el background sólo se pinte una vez, sin repetirse y ocupando lo que mida la imagen en su formato y proporción original.',
	'repeat-x':
		'El valor repeat-x hará que el background se repita sólo en el eje x.',
	'repeat-y':
		'El valor repeat-y hará que el background se repita sólo en el eje y.'
};
