import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import i18n from '@shared/config/i18n/i18nForTests'
import { ThemeProvider } from '@shared/theme/themeProvider'

interface RenderWithProvidersOptions {
    route?: string
}

const RenderWithProviders = (children: ReactNode, options: RenderWithProvidersOptions = {}) => {
    const { route = '/' } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <ThemeProvider>
                <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
            </ThemeProvider>
        </MemoryRouter>
    )
}

export { RenderWithProviders }
