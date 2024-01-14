import { memo, type FC } from 'react'
import { clsx } from 'clsx'

import styles from './text.m.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

const Text: FC<TextProps> = memo(({ className, title, text, theme = TextTheme.PRIMARY }) => {
    const mods = {
        [styles[theme]]: true
    }
    return (
        <div className={clsx(styles.main, mods, className)}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
})

Text.displayName = 'Text'

export { Text }
