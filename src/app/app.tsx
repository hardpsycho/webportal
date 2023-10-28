import { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { ThemeProvider } from '@shared/theme/themeProvider'
import './styles/main.scss'

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export { App }
