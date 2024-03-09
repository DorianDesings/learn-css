export const BACKGROUND_ATTACHMENT_INPUTS = [
	{
		id: 'scroll',
		value: 'scroll',
		type: 'radio',
		name: 'background-attachment',
		defaultChecked: true
	},
	{
		id: 'fixed',
		value: 'fixed',
		type: 'radio',
		name: 'background-attachment',
		defaultChecked: false
	}
];

export const BACKGROUND_ATTACHMENT_TEXTS = {
	scroll:
		'Scroll es el valor por defecto, la imagen de fondo se desplaza junto con el contenido del elemento cuando el usuario se desplaza por la página.',
	fixed:
		'Con el valor fixed la imagen de fondo permanece fija en su posición mientras el contenido del elemento se desplaza sobre ella. Es útil para crear efectos de paralaje.'
};
