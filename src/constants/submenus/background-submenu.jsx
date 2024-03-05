import { v4 } from 'uuid';
import BackgroundPosition from '../../components/background/background-position/BackgroundPosition';
import BackgroundRepeat from '../../components/background/background-repeat/BackgroundRepeat';
import BackgroundSize from '../../components/background/background-size/BackgroundSize';
import Introduction from '../../components/background/introduction/Introduction';

export const BACKGROUND_MENU = [
	{
		id: v4(),
		title: 'Introducción',
		path: 'introduction',
		view: <Introduction />
	},
	{
		id: v4(),
		title: 'Background Repeat',
		path: 'background-repeat',
		view: <BackgroundRepeat />
	},
	{
		id: v4(),
		title: 'Background Position',
		path: 'background-position',
		view: <BackgroundPosition />
	},
	{
		id: v4(),
		title: 'Background Size',
		path: 'background-size',
		view: <BackgroundSize />
	}
];
