import { useContext } from 'react'

import { ThemeContext } from './themeContext'
import { ThemeVariant } from './themeProvider'

type UseTheme = () => { theme: ThemeVariant; toggleTheme: () => void }

export const useTheme: UseTheme = () => {
    const themeData = useContext(ThemeContext)

    if (!themeData) {
        throw new Error('Ошибка темы')
    }

    return themeData
}
