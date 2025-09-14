import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'

import { pagesUrl } from '@/app/config/routes/page-routes/page-routes'

import styles from './BackButton.module.scss'

export function BackButton() {
	return (
		<Link className={styles.back} href={pagesUrl.home()}>
			<BiArrowBack size={20} />
			Назад
		</Link>
	)
}
