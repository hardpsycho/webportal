import { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '@shared/config/router'

interface AppProps {}

const App: FC<AppProps> = () => {
    return <RouterProvider router={router} />
}

export { App }
