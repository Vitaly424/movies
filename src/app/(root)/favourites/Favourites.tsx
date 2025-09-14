'use client'

import { useSelector } from 'react-redux'

import { BackButton } from '@/components/ui/back-button/BackButton'
import { MoviesList } from '@/components/ui/movies/movies-list/MoviesList'
import { Title } from '@/components/ui/title/Title'

import { getIdsSelector } from '@/store/favourites/selectors/getIdsSelector'

import styles from './Favourites.module.scss'
import data from '@/data/data.json'

export function Favourites() {
	const favouritesIds = useSelector(getIdsSelector)

	const moviesFavourites = data.movies.filter(movie =>
		favouritesIds.includes(movie.id)
	)

	return (
		<>
			<BackButton />

			<Title className={styles.title} typeTag='h1'>
				Избранное
			</Title>

			{!!moviesFavourites.length ? (
				<MoviesList movies={moviesFavourites} />
			) : (
				<>
					<Title size='md' typeTag='h2'>
						Ничего не найдено
					</Title>
				</>
			)}
		</>
	)
}
