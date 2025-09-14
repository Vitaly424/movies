import { Header } from '@/components/layout/Header'
import { Container } from '@/components/ui/container/Container'

import styles from './Layout.module.scss'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className={styles.layout}>
			<Header />
			<main>
				<Container>{children}</Container>
			</main>
		</div>
	)
}
