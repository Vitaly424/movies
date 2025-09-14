import styles from './Rating.module.scss'

interface RatingProps {
	rating: number
}

export function Rating(props: RatingProps) {
	const { rating } = props

	return (
		<div className={styles.rating}>
			<p>{rating}</p>
		</div>
	)
}
