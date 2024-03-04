import { v4 } from 'uuid';
import BackgroundPosition from '../components/background/background-position/BackgroundPosition';
import BackgroundRepeat from '../components/background/background-repeat/BackgroundRepeat';
import Introduction from '../components/background/introduction/Introduction';

export const BACKGROUND_MENU = [
	{
		id: v4(),
		title: 'Introducción',
		view: <Introduction />
	},
	{
		id: v4(),
		title: 'Background Repeat',
		view: <BackgroundRepeat />
	},
	{
		id: v4(),
		title: 'Background Postion',
		view: <BackgroundPosition />
	}
];
