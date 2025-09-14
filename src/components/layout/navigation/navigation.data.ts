import { pagesUrl } from '@/app/config/routes/page-routes/page-routes'

import { NavigationItem } from './navigation.types'

export const navigationData: NavigationItem[] = [
	{
		id: 1,
		url: pagesUrl.home(),
		label: 'Главная'
	},
	{
		id: 2,
		url: pagesUrl.favourites(),
		label: 'Избранное'
	}
]
