import { useEffect, useRef, useState } from 'react'

export function useScrollDirection() {
	const [isScrollingDown, setIsScrollingDown] = useState(false)
	const lastScrollY = useRef(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
				setIsScrollingDown(true)
			} else {
				setIsScrollingDown(false)
			}

			lastScrollY.current = currentScrollY
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return isScrollingDown
}
