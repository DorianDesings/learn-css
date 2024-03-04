import { useState } from 'react';
import Submenu from '../../components/background/submenu/Submenu';
import { BACKGROUND_MENU } from '../../constants/background-submenu';

const Background = () => {
	const [currentPage, setCurrentPage] = useState(0);
	return (
		<>
			<h1>Guía interactiva para Flexbox</h1>
			<Submenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
			{BACKGROUND_MENU[currentPage].view}
		</>
	);
};

export default Background;
