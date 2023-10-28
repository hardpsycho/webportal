import { createBrowserRouter } from 'react-router-dom'

import { Root } from '@layouts/root'
import { AboutPage } from '@pages/aboutPage'
import { MainPage } from '@pages/mainPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            }
        ]
    }
])
