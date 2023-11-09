import { type FC } from 'react'

import { Spinner } from '@shared/ui/spinner'
import styles from './pageSpinner.m.scss'

interface PageSpinnerProps {
    width?: string
    height?: string
}

const PageSpinner: FC<PageSpinnerProps> = ({ width = '80', height = '80' }) => {
    return (
        <div className={styles.pageSpinner}>
            <Spinner className={styles.spinner} width={width} height={height} />
        </div>
    )
}

export { PageSpinner }
