import { ReactNode, useState, type FC } from 'react'

import { ThemeContext } from './themeContext'

interface ThemeProviderProps {
    children: ReactNode
}

export enum ThemeVariant {
    LIGHT = 'hp-theme-light',
    DARK = 'hp-theme-dark'
}

const savedTheme = localStorage.getItem('theme') as ThemeVariant

const defaultTheme = savedTheme || ThemeVariant.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeVariant>(defaultTheme)

    function toggleTheme() {
        const newTheme = theme === ThemeVariant.LIGHT ? ThemeVariant.DARK : ThemeVariant.LIGHT
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                toggleTheme: toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }
