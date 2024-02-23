import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Flexbox from '../pages/flexbox/Flexbox';
import Home from '../pages/home/Home';

const Router = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (pathname === '/') return;
		navigate('/');
	}, []);
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/flexbox' element={<Flexbox />} />
			</Route>
		</Routes>
	);
};

export default Router;
