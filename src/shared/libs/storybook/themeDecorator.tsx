import { StoryFn } from '@storybook/react'

import { ThemeVariant } from '@shared/theme/themeProvider'
import '@shared/config/i18n/i18n'
import '@app/styles/main.scss'

const themeDecorator = (theme: ThemeVariant) => {
    const _themeDecorator = (Story: StoryFn) => {
        return (
            <div className={theme}>
                <Story />
            </div>
        )
    }

    return _themeDecorator
}

export { themeDecorator }
