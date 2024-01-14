import { memo, type FC } from 'react'
import { clsx } from 'clsx'

import { useTheme } from '@shared/theme/useTheme'
import styles from './themeSwitcher.m.scss'
import LightIcon from '@shared/assets/images/sun.svg'
import DarkIcon from '@shared/assets/images/moon.svg'
import { ThemeVariant } from '@shared/theme/themeProvider'
import { Button, ButtonVariant } from '@shared/ui/button'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            variant={ButtonVariant.GHOST}
            className={clsx(styles.themeSwitcher, className)}
            onClick={toggleTheme}
        >
            {theme === ThemeVariant.DARK ? (
                <LightIcon className={styles.icon} />
            ) : (
                <DarkIcon className={styles.icon} />
            )}
        </Button>
    )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'

export { ThemeSwitcher }
