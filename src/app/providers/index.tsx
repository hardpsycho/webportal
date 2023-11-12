import { ReactNode, type FC } from 'react'

import { ThemeProvider } from '@shared/theme/themeProvider'

interface AppProvidersProps {
    children: ReactNode
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>
}

export { AppProviders }
