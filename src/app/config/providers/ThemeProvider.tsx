import { ThemeProvider as ThemeProviderLib } from 'next-themes'
import { PropsWithChildren } from 'react'

export function ThemeProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<ThemeProviderLib attribute='class' defaultTheme='dark'>
			{children}
		</ThemeProviderLib>
	)
}
