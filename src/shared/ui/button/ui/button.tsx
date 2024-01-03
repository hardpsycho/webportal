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
    disabled?: boolean
    isLoading?: boolean
}

const Button: FC<ButtonProps> = ({
    children,
    className = '',
    variant = ButtonVariant.STANDART,
    size = ButtonSize.MEDIUM,
    square = false,
    disabled = false,
    isLoading = false,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [styles['square']]: square,
        [styles['disabled']]: disabled,
        [styles['loading']]: isLoading
    }

    return (
        <button
            data-testid='btn'
            {...otherProps}
            className={clsx(styles.button, styles[variant], mods, styles[size], className)}
            disabled={disabled}
        >
            {isLoading && (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={'20px'}
                    height={'20px'}
                    viewBox='0 0 24 24'
                >
                    <g>
                        <circle cx='12' cy='2.5' r='1.5' fill='currentColor' opacity='.14' />
                        <circle cx='16.75' cy='3.77' r='1.5' fill='currentColor' opacity='.29' />
                        <circle cx='20.23' cy='7.25' r='1.5' fill='currentColor' opacity='.43' />
                        <circle cx='21.5' cy='12' r='1.5' fill='currentColor' opacity='.57' />
                        <circle cx='20.23' cy='16.75' r='1.5' fill='currentColor' opacity='.71' />
                        <circle cx='16.75' cy='20.23' r='1.5' fill='currentColor' opacity='.86' />
                        <circle cx='12' cy='21.5' r='1.5' fill='currentColor' />
                        <animateTransform
                            attributeName='transform'
                            calcMode='discrete'
                            dur='0.75s'
                            repeatCount='indefinite'
                            type='rotate'
                            values='0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12'
                        />
                    </g>
                </svg>
            )}
            <div className={styles.children}>{children}</div>
        </button>
    )
}

export { Button }
