import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Navigation.module.scss'
import { navigationData } from './navigation.data'

export function Navigation() {
	const pathname = usePathname()

	console.log('pathname', pathname)

	return (
		<nav className={styles.nav}>
			{navigationData.map(item => (
				<Link
					key={item.id}
					className={cn(styles.link, {
						[styles.active]: pathname === item.url
					})}
					href={item.url}
				>
					{item.label}
				</Link>
			))}
		</nav>
	)
}
