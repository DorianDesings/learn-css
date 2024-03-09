import { Navigate, Route, Routes } from 'react-router-dom';
import InConstruction from '../components/common/in-construction/InConstruction';
import { BACKGROUND_MENU } from '../constants/submenus/background-submenu';
import { FLEXBOX_MENU } from '../constants/submenus/flexbox-submenu';
import Layout from '../layouts/Layout';
import Background from '../pages/background/Background';
import BoxShadow from '../pages/box-shadow/BoxShadow';
import Flexbox from '../pages/flexbox/Flexbox';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/box-shadow' element={<BoxShadow />} />
				<Route path='/background' element={<Background />}>
					{BACKGROUND_MENU.map(menu => (
						<Route key={menu.id} path={menu.path} element={menu.view} />
					))}
					<Route
						path='/background'
						element={<Navigate to='/background/introduction' replace />}
					/>
				</Route>

				<Route path='/flexbox-container' element={<Flexbox />}>
					{FLEXBOX_MENU.map(menu => (
						<Route key={menu.id} path={menu.path} element={menu.view} />
					))}
					<Route
						path='/flexbox-container'
						element={<Navigate to='/flexbox-container/introduction' replace />}
					/>
				</Route>
				<Route path='/*' element={<InConstruction />} />
			</Route>
		</Routes>
	);
};

export default Router;
