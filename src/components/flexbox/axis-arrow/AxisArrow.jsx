import {
	faArrowDown,
	faArrowLeft,
	faArrowRight,
	faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledTextWithMargin } from '../../../styles/common';

const AxisArrow = ({ flexDirection }) => {
	return (
		<StyledTextWithMargin>
			Main axis:
			{flexDirection === 'row' && <FontAwesomeIcon icon={faArrowRight} />}
			{flexDirection === 'column' && <FontAwesomeIcon icon={faArrowDown} />}
			{flexDirection === 'row-reverse' && (
				<FontAwesomeIcon icon={faArrowLeft} />
			)}
			{flexDirection === 'column-reverse' && (
				<FontAwesomeIcon icon={faArrowUp} />
			)}
			Cross axis:
			{flexDirection === 'row' && <FontAwesomeIcon icon={faArrowDown} />}
			{flexDirection === 'column' && <FontAwesomeIcon icon={faArrowRight} />}
			{flexDirection === 'row-reverse' && (
				<FontAwesomeIcon icon={faArrowDown} />
			)}
			{flexDirection === 'column-reverse' && (
				<FontAwesomeIcon icon={faArrowRight} />
			)}
		</StyledTextWithMargin>
	);
};

export default AxisArrow;
