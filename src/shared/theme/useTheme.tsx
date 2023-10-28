import { useContext } from 'react'

import { ThemeContext } from './themeContext'

export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return { theme, toggleTheme }
}
