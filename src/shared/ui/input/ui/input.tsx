import { InputHTMLAttributes, ChangeEvent, forwardRef, memo } from 'react'
import { clsx } from 'clsx'

import styles from './input.m.scss'

type InputAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends InputAttributes {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

const Input = memo(
    forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
        const { className, value, onChange, ...otherProps } = props

        return (
            <input
                {...otherProps}
                className={clsx(styles.input, className)}
                value={value}
                ref={ref}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
            />
        )
    })
)

Input.displayName = 'Input'

export { Input }
