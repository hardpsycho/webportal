import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'

import { AppProviders } from '@app/providers'
import i18n from '@shared/config/i18n/i18nForTests'

const RenderWithProviders = (children: ReactNode) => {
    return render(
        <AppProviders>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </AppProviders>
    )
}

export { RenderWithProviders }
