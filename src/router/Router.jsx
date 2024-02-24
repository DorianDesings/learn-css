import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Flexbox from '../pages/flexbox/Flexbox';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/flexbox' element={<Flexbox />} />
				<Route path='/*' element={<Home />} />
			</Route>
		</Routes>
	);
};

const handleBeforeUnload = () => {
	navigate('/');
};

export default Router;
