import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Flexbox from '../pages/flexbox/Flexbox';
import Home from '../pages/home/Home';

const Router = () => {
	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener('beforeunload', handleBeforeUnload);

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, [navigate]);
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/flexbox' element={<Flexbox />} />
			</Route>
		</Routes>
	);
};

const handleBeforeUnload = () => {
	navigate('/');
};

export default Router;
