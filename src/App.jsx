import { BrowserRouter, Navigate } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Navigate to='/' />
			<Router />
		</BrowserRouter>
	);
};

export default App;
