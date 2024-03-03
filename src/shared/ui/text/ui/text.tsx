import { memo, type FC } from 'react'
import { clsx } from 'clsx'

import styles from './text.m.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme,
    align?: TextAlign
}

const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props

    return (
        <div className={clsx(styles.main, className, styles[align], styles[theme])}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )
})

Text.displayName = 'Text'

export { Text }
