import cn from 'clsx'
import type { ElementType, ReactNode } from 'react'

import styles from './Title.module.scss'

type TitleSize = 'lg' | 'md'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
	className?: string
	typeTag?: 'h1' | 'h2' | 'h3' | 'h4'
	size?: TitleSize
}

export function Title(props: TitleProps) {
	const {
		className,
		typeTag = 'h2',
		size = 'lg',
		children,
		...otherProps
	} = props

	const HeaderTag: ElementType = typeTag

	return (
		<HeaderTag
			className={cn(styles.title, styles[size], className)}
			{...otherProps}
		>
			{children}
		</HeaderTag>
	)
}
