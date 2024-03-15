import { useState } from 'react';
import BorderRadiusOneValue from '../../components/border-radius/one-value/BorderRadiusOneValue';
import { StyledBorderRadiusBoxOneValue } from '../../components/border-radius/one-value/border-radius-one-value-styles';
import BorderRadiusTwoValues from '../../components/border-radius/two-values/BorderRadiusTwoValues';
import {
	StyledFormField,
	StyledInputsContainer
} from '../../styles/form-elements/inputs/inputs.styles';
import {
	StyledInputRadio,
	StyledLabel
} from '../../styles/form-elements/radio-buttons/radio-buttons.styles';
import {
	StyledToggleCheck,
	StyledToggleLabel
} from '../../styles/form-elements/toggle/toggle.styles';
import {
	StyledBoxBackgroundAlternate,
	StyledFlexContainer
} from '../../styles/section/sections.styles';
import { StyledSpan, StyledText } from '../../styles/texts/texts';
import { StyledMainTitle, StyledTitle } from '../../styles/titles/titles';

const BorderRadius = () => {
	const [numberOfValues, setNumberOfValues] = useState(1);
	const [showEllipses, setShowEllipses] = useState(true);
	const [ellipseOneValue, setEllipseOneValue] = useState({
		xValue: 0,
		yValue: 0
	});

	return (
		<>
			<StyledMainTitle>Guía interactiva para Border Radius</StyledMainTitle>
			<StyledText>
				La propiedad border radius nos permite redondear las esquinas de
				cualquier caja que tengamos en nuestro documento.
			</StyledText>
			<StyledText>
				Border radius genera elipses y la esquina del elemento se ajusta a esa
				elipse. Las elipses tienen dos radios, el mayor y el menor, si sólo
				establecemos un valor, la elipse parecerá un círculo ya que sus dos
				radios medirán lo mismo.
			</StyledText>
			<StyledText>
				La sintaxis admite hasta 8 valores, 2 por esquina, aunque lo más
				habitual es que los radios de las elipses tengan los mismos valores.
			</StyledText>
			<StyledTitle>Combinaciones de valores</StyledTitle>
			<StyledFlexContainer>
				<div>
					<StyledInputsContainer $rows={4}>
						<StyledFormField>
							<StyledInputRadio
								id='one-value'
								name='values'
								type='radio'
								defaultChecked
								onChange={() => setNumberOfValues(1)}
							/>
							<StyledLabel htmlFor='one-value'>1 Valor</StyledLabel>
						</StyledFormField>
						<StyledFormField>
							<StyledInputRadio
								id='two-values'
								name='values'
								type='radio'
								onChange={() => setNumberOfValues(2)}
							/>
							<StyledLabel htmlFor='two-values'>2 Valores</StyledLabel>
						</StyledFormField>
						<StyledFormField>
							<StyledInputRadio
								id='three-values'
								name='values'
								type='radio'
								onChange={() => setNumberOfValues(3)}
							/>
							<StyledLabel htmlFor='three-values'>3 Valores</StyledLabel>
						</StyledFormField>
						<StyledFormField>
							<StyledInputRadio
								id='four-values'
								name='values'
								type='radio'
								onChange={() => setNumberOfValues(4)}
							/>
							<StyledLabel htmlFor='four-values'>4 Valores</StyledLabel>
						</StyledFormField>
					</StyledInputsContainer>
					{numberOfValues === 1 && (
						<BorderRadiusOneValue
							ellipseOneValue={ellipseOneValue}
							setEllipseOneValue={setEllipseOneValue}
						/>
					)}
					{numberOfValues === 2 && (
						<BorderRadiusTwoValues
							ellipseOneValue={ellipseOneValue}
							setEllipseOneValue={setEllipseOneValue}
						/>
					)}
				</div>
				{numberOfValues === 1 && (
					<StyledBorderRadiusBoxOneValue
						$ellipseOneValue={ellipseOneValue}
						$showEllipses={showEllipses}
					/>
				)}
			</StyledFlexContainer>
			<StyledFormField>
				<StyledFlexContainer>
					<StyledSpan>Mostrar elipses</StyledSpan>
					<StyledToggleCheck
						type='checkbox'
						id='show-ellipses'
						value={showEllipses}
						defaultChecked
						onChange={() => setShowEllipses(!showEllipses)}
					/>
					<StyledToggleLabel htmlFor='show-ellipses' />
				</StyledFlexContainer>
			</StyledFormField>
			<StyledSpan>
				*Las elipses son orientativas para que se vea lo que pasa internamente
				en el navegador.
			</StyledSpan>
			<StyledText>Resultado:</StyledText>
			<StyledBoxBackgroundAlternate />
		</>
	);
};

export default BorderRadius;
