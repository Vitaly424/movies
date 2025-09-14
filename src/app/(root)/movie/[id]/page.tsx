import { Movie } from './Movie'

interface MoviePageProps {
	params: Promise<{ id: string }>
}

export default async function MoviePage({ params }: MoviePageProps) {
	const { id } = await params

	return <Movie id={id} />
}
