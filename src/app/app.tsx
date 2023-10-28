import { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '@shared/config/router'
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
