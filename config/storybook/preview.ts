import type { Preview } from '@storybook/react'

import { globalDecorator } from '@shared/libs/storybook/globalDecorator'
import { themeDecorator } from '@shared/libs/storybook/themeDecorator'
import { ThemeVariant } from '@shared/theme/themeProvider'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [globalDecorator, themeDecorator(ThemeVariant.LIGHT)]
}

export default preview
