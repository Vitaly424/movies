import cn from 'clsx'
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { getIdsSelector } from '@/store/favourites/selectors/getIdsSelector'
import { favouritesAction } from '@/store/favourites/slice/favouritesSlice'
import { useAppDispatch } from '@/store/store'

import styles from './FavouritesButton.module.scss'

interface FavouritesButtonProps {
	id: number
	className?: string
}

export function FavouritesButton(props: FavouritesButtonProps) {
	const { id, className } = props

	const dispatch = useAppDispatch()
	const favouritesIds = useSelector(getIdsSelector)

	const toggleFav = () => {
		dispatch(favouritesAction.toggle({ id }))
	}

	const isFav = favouritesIds.includes(id)

	return (
		<button
			className={cn(styles.btn, className)}
			onClick={toggleFav}
			type='button'
			title={isFav ? 'Убрать из избранного' : 'Добавить в избранное'}
		>
			{isFav ? (
				<MdOutlineFavorite size={22} fill='red' />
			) : (
				<MdFavoriteBorder size={22} />
			)}
		</button>
	)
}
