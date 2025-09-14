'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { pagesUrl } from '@/app/config/routes/page-routes/page-routes'

import { ThemeSwitcher } from '../ui/theme-switcher/ThemeSwitcher'

import styles from './Header.module.scss'
import { Navigation } from './navigation/Navigation'
import { useScrollDirection } from './useScrollDirection'

export function Header() {
	const isScrollingDown = useScrollDirection()

	return (
		<header
			className={cn(styles.header, {
				[styles.header_scrolled]: isScrollingDown
			})}
		>
			<Link href={pagesUrl.home()}>
				<Image
					className={styles.logo}
					src={'/logo.jpg'}
					width={406}
					height={101}
					alt='Логотип - Кино'
				/>
			</Link>

			<div className={styles.menu}>
				<Navigation />
				<ThemeSwitcher />
			</div>
		</header>
	)
}
