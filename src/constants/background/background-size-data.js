export const BACKGROUND_SIZE_INPUTS = [
	{
		id: 'auto',
		value: 'auto',
		type: 'radio',
		name: 'background-size',
		defaultChecked: true
	},
	{
		id: 'cover',
		value: 'cover',
		type: 'radio',
		name: 'background-size',
		defaultChecked: false
	},
	{
		id: 'contain',
		value: 'contain',
		type: 'radio',
		name: 'background-size',
		defaultChecked: false
	},
	{
		id: 'manual',
		value: '',
		type: 'radio',
		name: 'background-size',
		defaultChecked: false
	}
];

export const BACKGROUND_SIZE_TEXTS = {
	auto: 'El valor auto es el valor por defecto, el tamaño de la imagen no se ve alterado y respeta sus proporciones y tamaño original.',
	cover:
		'El valor cover hará que la imagen escale hasta cubir todo el ancho y alto del contenedor aunque se desborde.',
	contain:
		'El valor contain es similar a cover pero sin llegar a desbordar el contenedor, la imagen escalará hasta cubrir el contenedor pero sin desbordarlo.'
};
