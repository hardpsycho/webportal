import { type FC } from 'react'
import { clsx } from 'clsx'

import { useTheme } from '@shared/theme/useTheme'
import styles from './themeSwitcher.m.scss'
import LightIcon from '@shared/assets/images/sun.svg'
import DarkIcon from '@shared/assets/images/moon.svg'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button className={clsx(styles.themeSwitcher, className)} onClick={toggleTheme}>
            {theme === 'hp-theme-light' ? (
                <LightIcon className={styles.icon} />
            ) : (
                <DarkIcon className={styles.icon} />
            )}
        </button>
    )
}

export { ThemeSwitcher }
