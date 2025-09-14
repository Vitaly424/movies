'use client'

import Image from 'next/image'

import { BackButton } from '@/components/ui/back-button/BackButton'
import { FavouritesButton } from '@/components/ui/favourites-button/FavouritesButton'
import { Rating } from '@/components/ui/rating/Rating'
import { Title } from '@/components/ui/title/Title'

import styles from './Movie.module.scss'
import data from '@/data/data.json'
import { Movie as IMovie } from '@/types/movie.types'

interface MovieProps {
	id: string
}

export const Movie = (props: MovieProps) => {
	const { id } = props

	const movie = data.movies.find((movie: IMovie) => String(movie.id) === id)

	if (!movie) {
		return (
			<>
				<Title size='md' typeTag='h2'>
					Фильм не найден
				</Title>
			</>
		)
	}

	return (
		<>
			<BackButton />

			<div className={styles.box}>
				<div className={styles.image_box}>
					<Image
						className={styles.image}
						src={movie.image}
						alt={movie.title}
						width={300}
						height={400}
					/>

					<Rating rating={movie.rating} />
				</div>

				<div>
					<div className={styles.heading}>
						<Title size='md' typeTag='h1'>
							{movie.title}
						</Title>
					</div>

					<FavouritesButton id={movie.id} />

					<p className={styles.description}>{movie.overview}</p>

					<p className={styles.date}>{movie.release_date}</p>
				</div>
			</div>
		</>
	)
}
