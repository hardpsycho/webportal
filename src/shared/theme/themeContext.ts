import { createContext } from 'react'

import { ThemeVariant } from './themeProvider'

interface IThemeContex {
    theme: ThemeVariant
    toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContex | null>(null)
