import { v4 } from 'uuid';

import AlignItems from '../../components/flexbox/align-items/AlignItems';
import FlexDirection from '../../components/flexbox/flex-direction/FlexDirection';
import Introduction from '../../components/flexbox/introduction/Introduction';
import JustifyContent from '../../components/flexbox/justify-content/JustifyContent';

export const FLEXBOX_MENU = [
	{
		id: v4(),
		title: 'Introducción',
		path: 'introduction',
		view: <Introduction />
	},
	{
		id: v4(),
		title: 'Flex Direction',
		path: 'flex-direction',
		view: <FlexDirection />
	},
	{
		id: v4(),
		title: 'Justify Content',
		path: 'justify-content',
		view: <JustifyContent />
	},
	{
		id: v4(),
		title: 'Align Items',
		path: 'align-items',
		view: <AlignItems />
	}
];
