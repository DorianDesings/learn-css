import { FLEXBOX_MENU } from '../../../constants/flexbox-submenu';
import { StyledFlexboxMenu, StyledSubmenuItem } from './styles';

const Submenu = ({ currentPage, setCurrentPage }) => {
	return (
		<nav>
			<StyledFlexboxMenu>
				{FLEXBOX_MENU.map((menu, index) => (
					<StyledSubmenuItem key={menu.id} $active={currentPage === index}>
						<span onClick={() => setCurrentPage(index)}>{menu.title}</span>
					</StyledSubmenuItem>
				))}
			</StyledFlexboxMenu>
		</nav>
	);
};

export default Submenu;
