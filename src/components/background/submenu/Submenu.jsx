import { BACKGROUND_MENU } from '../../../constants/background-submenu';
import { StyledBackgroundMenu, StyledSubmenuItem } from './styles';

const Submenu = ({ currentPage, setCurrentPage }) => {
	return (
		<nav>
			<StyledBackgroundMenu>
				{BACKGROUND_MENU.map((menu, index) => (
					<StyledSubmenuItem key={menu.id} $active={currentPage === index}>
						<span onClick={() => setCurrentPage(index)}>{menu.title}</span>
					</StyledSubmenuItem>
				))}
			</StyledBackgroundMenu>
		</nav>
	);
};

export default Submenu;
