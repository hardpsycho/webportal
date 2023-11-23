import { StoryFn } from '@storybook/react'
import { clsx } from 'clsx'

import { ThemeVariant } from '@shared/theme/themeProvider'
import '@shared/config/i18n/i18n'
import '@app/styles/main.scss'
import './storybookRoot.scss'

const themeDecorator = (theme: ThemeVariant) => {
    const _themeDecorator = (Story: StoryFn) => {
        return (
            <div className={clsx(theme, 'hp-sb-root')}>
                <Story />
            </div>
        )
    }

    return _themeDecorator
}

export { themeDecorator }
