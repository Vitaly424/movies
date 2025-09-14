import cn from 'classnames'
import type { ReactNode } from 'react'

import styles from './Container.module.scss'

interface ContainerProps {
	children: ReactNode
	className?: string
}

export function Container(props: ContainerProps) {
	const { children, className } = props

	return <div className={cn(styles.container, className)}>{children}</div>
}
