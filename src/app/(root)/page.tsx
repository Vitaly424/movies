import { MoviesList } from '@/components/ui/movies/movies-list/MoviesList'
import { Title } from '@/components/ui/title/Title'

import styles from './Home.module.scss'
import data from '@/data/data.json'

export default function HomePage() {
	return (
		<>
			<Title className={styles.title} typeTag='h1'>
				Каталог фильмов
			</Title>

			<MoviesList movies={data.movies} />
		</>
	)
}
