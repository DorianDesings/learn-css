import { Outlet } from 'react-router-dom';
import Submenu from '../../components/common/submenu/Submenu';
import { BACKGROUND_MENU } from '../../constants/submenus/background-submenu';

const Background = () => {
	return (
		<>
			<h1>Guía interactiva para Background</h1>
			<Submenu submenu={BACKGROUND_MENU} />
			<Outlet />
		</>
	);
};

export default Background;
