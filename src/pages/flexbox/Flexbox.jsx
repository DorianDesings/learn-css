import { useState } from 'react';
import Submenu from '../../components/flexbox/submenu/Submenu';
import Footer from '../../components/footer/Footer';
import { FLEXBOX_MENU } from '../../constants/flexbox-submenu';

const Flexbox = () => {
	const [currentPage, setCurrentPage] = useState(0);
	return (
		<>
			<h1>Guía interactiva para Flexbox</h1>
			<Submenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
			{FLEXBOX_MENU[currentPage].view}
		</>
	);
};

export default Flexbox;
