import { createBrowserRouter } from 'react-router-dom'

import { Root } from '@layouts/root'
import { AboutPage } from '@pages/aboutPage'
import { MainPage } from '@pages/mainPage'
import { NotFoundPage } from '@pages/notFoundPage'
import { ErrorComponent } from '@shared/ui/errorComponent'
import { ProfilePage } from '@pages/profilePage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/*',
                element: <NotFoundPage />
            }
        ]
    }
])
