import { ReactNode, type FC, Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'

import { ThemeProvider } from '@shared/theme/themeProvider'
import { StoreProvider } from '@app/store/ui/storeProvider'
import i18n from '@shared/config/i18n/i18n'

interface AppProvidersProps {
    children: ReactNode
}

const AppProviders: FC<AppProvidersProps> = ({ children }) => {
    return (
        <StoreProvider>
            <Suspense fallback={<div>Загрузка...</div>}>
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider>{children}</ThemeProvider>
                </I18nextProvider>
            </Suspense>
        </StoreProvider>
    )
}

export { AppProviders }
