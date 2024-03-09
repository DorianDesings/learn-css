import { useState } from 'react';
import {
	BACKGROUND_ATTACHMENT_INPUTS,
	BACKGROUND_ATTACHMENT_TEXTS
} from '../../../constants/background/background-attachment-data';
import {
	StyledInputRadio,
	StyledInputsContainer,
	StyledLabelRadio
} from '../../common/form-elements/radio-buttons/radio-buttons.styles';
import Text from '../../common/text/Text';

const BackgroundAttachment = () => {
	const [backgroundAttachment, setBackgroundAttachment] = useState('scroll');
	return (
		<>
			<h2>Background Attachment</h2>
			<Text>
				Esta propiedad determina si la imagen de fondo de un elemento se
				desplaza con el contenido del elemento o permanece fija en su posición
				mientras el contenido se desplaza sobre ella.
			</Text>
			<StyledInputsContainer $rows={BACKGROUND_ATTACHMENT_INPUTS.length}>
				{BACKGROUND_ATTACHMENT_INPUTS.map(input => (
					<div key={input.id}>
						<StyledInputRadio
							{...input}
							onChange={() => setBackgroundAttachment(input.id)}
						/>
						<StyledLabelRadio htmlFor={input.id}>{input.id}</StyledLabelRadio>
					</div>
				))}
			</StyledInputsContainer>
			<Text>
				{BACKGROUND_ATTACHMENT_TEXTS[backgroundAttachment]}
				Para ver bien cómo funciona fixed, te dejo aquí un ejemplo muy visual
			</Text>
			{backgroundAttachment === 'fixed' && (
				<>
					<span>👉 </span>
					<a
						target='_blank'
						href='https://codepen.io/DorianDesings/pen/PogZdMr'
						rel='noreferrer'
					>
						Ejemplo
					</a>
				</>
			)}
		</>
	);
};

export default BackgroundAttachment;
