import { v4 } from 'uuid';
import Absolute from '../../components/position/absolute/Absolute';
import Fixed from '../../components/position/fixed/Fixed';
import Introduction from '../../components/position/introduction/Introduction';
import Relative from '../../components/position/relative/Relatve';
import Sticky from '../../components/position/sticky/Sticky';
import ZIndex from '../../components/position/z-index/ZIndex';

export const POSITION_MENU = [
	{
		id: v4(),
		title: 'Introducción',
		path: 'introduction',
		view: <Introduction />
	},
	{
		id: v4(),
		title: 'Relative',
		path: 'relative',
		view: <Relative />
	},
	{
		id: v4(),
		title: 'Absolute',
		path: 'absolute',
		view: <Absolute />
	},
	{
		id: v4(),
		title: 'Fixed',
		path: 'fixed',
		view: <Fixed />
	},
	{
		id: v4(),
		title: 'Sticky',
		path: 'sticky',
		view: <Sticky />
	},
	{
		id: v4(),
		title: 'Z Index',
		path: 'z-index',
		view: <ZIndex />
	}
];
