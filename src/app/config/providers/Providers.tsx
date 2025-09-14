'use client'

import NextTopLoader from 'nextjs-toploader'
import { type FC, type PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

import { StoreProvider } from './StoreProvider'
import { ThemeProvider } from './ThemeProvider'

export const Providers: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<StoreProvider>
			<ThemeProvider>
				{children}
				<NextTopLoader showSpinner={false} />
				<Toaster position='bottom-right' />
			</ThemeProvider>
		</StoreProvider>
	)
}
