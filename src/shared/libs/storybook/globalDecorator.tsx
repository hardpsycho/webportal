import { StoryFn } from '@storybook/react'

import { ThemeProvider } from '@shared/theme/themeProvider'
import '@shared/config/i18n/i18n'
import '@app/styles/main.scss'

const globalDecorator = (Story: StoryFn) => {
    return (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    )
}

export { globalDecorator }
