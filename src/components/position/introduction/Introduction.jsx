import { StyledSection } from '../../../styles/section/section.styles';
import { StyledHightlight, StyledText } from '../../../styles/texts/texts';
import {
	StyledMainTitle,
	StyledSubtitle,
	StyledTitle
} from '../../../styles/titles/titles';

const Introduction = () => {
	return (
		<>
			<StyledMainTitle>Introducción al módulo de position</StyledMainTitle>
			<StyledText>
				El módulo de position sirve para colocar elementos de una forma que no
				podríamos colocar de otra forma, es muy útil pero hay que utilizarlo con
				cuidado. Hay una serie de vocabulario que tenemos que conocer para
				entender position.
			</StyledText>
			<StyledTitle>Vocabulario position</StyledTitle>
			<StyledSection>
				<div>
					<StyledSubtitle>Espacio reservado</StyledSubtitle>
					<StyledText>
						Es el espacio que el navegador reserva para colocar cada elemento.
					</StyledText>
				</div>
				<div>
					<StyledSubtitle>Elemento posicionado</StyledSubtitle>
					<StyledText>
						Es cualquier elemento que utilice la propiedad position con
						cualquier valor que no sea{' '}
						<StyledHightlight>static</StyledHightlight>.
					</StyledText>
				</div>
				<div>
					<StyledSubtitle>Punto de referencia</StyledSubtitle>
					<StyledText>
						Es el punto desde el cual moveremos el elemento posicionado.
					</StyledText>
				</div>
			</StyledSection>

			<StyledTitle>Propiedades extra</StyledTitle>

			<StyledText>
				Cuando tenemos un elemento posicionado hay{' '}
				<StyledHightlight>cinco propiedades </StyledHightlight> que se
				“desbloquean” y que sólo podemos utilizar si el elemento está
				posicionado, todas aceptan valores{' '}
				<StyledHightlight>positivos</StyledHightlight> y{' '}
				<StyledHightlight>negativos</StyledHightlight>.
			</StyledText>
			<StyledSection>
				<div>
					<StyledSubtitle>Top</StyledSubtitle>
					<StyledText>Moverá el elemento desde arriba.</StyledText>
				</div>
				<div>
					<StyledSubtitle>Right</StyledSubtitle>
					<StyledText>Moverá el elemento desde la derecha.</StyledText>
				</div>
				<div>
					<StyledSubtitle>Bottom</StyledSubtitle>
					<StyledText>Moverá el elemento desde abajo</StyledText>
				</div>
				<div>
					<StyledSubtitle>Left</StyledSubtitle>
					<StyledText>Moverá el elemento desde la izquierda.</StyledText>
				</div>
				<div>
					<StyledSubtitle>Z Index</StyledSubtitle>
					<StyledText>Controla el nivel de apilamiento en el eje Z</StyledText>
				</div>
			</StyledSection>
		</>
	);
};

export default Introduction;
