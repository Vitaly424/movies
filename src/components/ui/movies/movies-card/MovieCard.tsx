'use client'

import Image from 'next/image'
import Link from 'next/link'

import { pagesUrl } from '@/app/config/routes/page-routes/page-routes'

import { FavouritesButton } from '../../favourites-button/FavouritesButton'
import { Rating } from '../../rating/Rating'

import styles from './MovieCard.module.scss'

interface MovieCardProps {
	id: number
	title: string
	release_date: string
	rating: number
	image: string
}

export function MovieCard(props: MovieCardProps) {
	const { title, release_date, rating, image, id } = props

	return (
		<div>
			<div className={styles.header}>
				<Rating rating={rating} />

				<FavouritesButton className={styles.fav} id={id} />

				<Link className={styles.linkImage} href={pagesUrl.movie(String(id))}>
					<Image
						className={styles.img}
						src={image}
						alt={title}
						width={300}
						height={450}
					/>
				</Link>
			</div>
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.date}>{release_date}</p>
			</div>
		</div>
	)
}
