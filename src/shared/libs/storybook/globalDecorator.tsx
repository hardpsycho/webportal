import { StoryFn } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { ThemeProvider } from '@shared/theme/themeProvider'
import '@shared/config/i18n/i18n'
import '@app/styles/main.scss'

const globalDecorator = (Story: StoryFn) => {
    return (
        <ThemeProvider>
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        </ThemeProvider>
    )
}

export { globalDecorator }
