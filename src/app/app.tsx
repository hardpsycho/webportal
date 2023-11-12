import { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import './styles/main.scss'
import '@shared/config/i18n/i18n'
import { AppProviders } from './providers'

interface AppProps {}

const App: FC<AppProps> = () => {
    return (
        <AppProviders>
            <RouterProvider router={router} />
        </AppProviders>
    )
}

export { App }
