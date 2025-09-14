'use client'

import { useTheme } from 'next-themes'
import { FaAffiliatetheme } from 'react-icons/fa'

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			type='button'
		>
			<FaAffiliatetheme fill={theme === 'dark' ? 'yellow' : 'white'} />
		</button>
	)
}
