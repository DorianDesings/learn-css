import { Outlet } from 'react-router-dom';

import Submenu from '../../components/common/submenu/Submenu';
import { FLEXBOX_MENU } from '../../constants/submenus/flexbox-submenu';

const Flexbox = () => {
	return (
		<>
			<h1>Guía interactiva para Flexbox</h1>
			<Submenu submenu={FLEXBOX_MENU} />
			<Outlet />
		</>
	);
};

export default Flexbox;
