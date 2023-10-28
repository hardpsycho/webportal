import { createContext } from 'react'

interface IThemeContex {
    theme?: string
    toggleTheme?: () => void
}

export const ThemeContext = createContext<IThemeContex>({})
