import { Outlet } from 'react-router-dom';
import Submenu from '../../components/common/submenu/Submenu';
import { POSITION_MENU } from '../../constants/submenus/position-submenu';

const Position = () => {
	return (
		<>
			<h1>Guía interactiva para Position</h1>
			<Submenu submenu={POSITION_MENU} />
			<Outlet />
		</>
	);
};

export default Position;
