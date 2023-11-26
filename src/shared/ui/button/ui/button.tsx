import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode, type FC } from 'react'

import styles from './button.m.scss'

export enum ButtonVariant {
    STANDART = 'standart',
    GHOST = 'ghost',
    OUTLINED = 'outlined'
}

export enum ButtonSize {
    SMALL = 'smallSize',
    MEDIUM = 'mediumSize',
    LARGE = 'largeSize'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    square?: boolean
}

const Button: FC<ButtonProps> = ({
    children,
    className = '',
    variant = ButtonVariant.STANDART,
    size = ButtonSize.MEDIUM,
    square = false,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [styles['square']]: square
    }

    return (
        <button
            {...otherProps}
            className={clsx(styles.button, styles[variant], mods, className, styles[size])}
        >
            {children}
        </button>
    )
}

export { Button }
