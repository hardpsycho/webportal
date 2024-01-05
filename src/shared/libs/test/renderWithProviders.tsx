import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { ReducersMapObject } from '@reduxjs/toolkit'

import i18n from '@shared/config/i18n/i18nForTests'
import { ThemeProvider } from '@shared/theme/themeProvider'
import { StoreProvider } from '@app/store/ui/storeProvider'
import { RootStateSchema } from '@app/store'

interface RenderWithProvidersOptions {
    route?: string
    initialState?: Partial<RootStateSchema>
    asyncReducers?: Partial<ReducersMapObject<RootStateSchema>>
}

const RenderWithProviders = (children: ReactNode, options: RenderWithProvidersOptions = {}) => {
    const { route = '/', initialState, asyncReducers } = options

    return render(
        <StoreProvider
            initialState={initialState as RootStateSchema}
            asyncReducers={asyncReducers as ReducersMapObject<RootStateSchema>}
        >
            <MemoryRouter initialEntries={[route]}>
                <ThemeProvider>
                    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
                </ThemeProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}

export { RenderWithProviders }
