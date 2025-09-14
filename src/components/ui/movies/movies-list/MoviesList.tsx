import { MovieCard } from '../movies-card/MovieCard'

import styles from './MoviesList.module.scss'
import { Movie } from '@/types/movie.types'

interface MoviesListProps {
	movies: Movie[]
}

export function MoviesList(props: MoviesListProps) {
	const { movies } = props

	return (
		<div className={styles.list}>
			{movies.map(movie => (
				<MovieCard
					id={movie.id}
					key={movie.id}
					title={movie.title}
					image={movie.image}
					rating={movie.rating}
					release_date={movie.release_date}
				/>
			))}
		</div>
	)
}
