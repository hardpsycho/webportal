import { ReactNode, useState, type FC } from 'react'

import { ThemeContext } from './themeContext'

interface ThemeProviderProps {
    children: ReactNode
}

const savedTheme = localStorage.getItem('theme')

const defaultTheme = savedTheme || 'hp-theme-light'

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme)

    function toggleTheme() {
        const newTheme = theme === 'hp-theme-light' ? 'hp-theme-dark' : 'hp-theme-light'
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
