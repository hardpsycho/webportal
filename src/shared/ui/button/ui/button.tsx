import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode, type FC } from 'react'

import styles from './button.m.scss'

export enum ButtonVariant {
    STANDART = 'standart',
    GHOST = 'ghost'
}

export enum ButtonSize {
    SMALL = 'smallSize',
    MEDIUM = 'mediumSize',
    LARGE = 'largeSize'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    theme?: ButtonVariant
    size?: ButtonSize
}

const Button: FC<ButtonProps> = ({
    children,
    className = '',
    theme = ButtonVariant.STANDART,
    size = ButtonSize.MEDIUM,
    ...otherProps
}) => {
    return (
        <button
            {...otherProps}
            className={clsx(styles.button, styles[theme], className, styles[size])}
        >
            {children}
        </button>
    )
}

export { Button }
