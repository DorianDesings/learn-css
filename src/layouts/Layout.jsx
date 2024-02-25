import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

const Layout = () => {
	return (
		<>
			<Menu />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
