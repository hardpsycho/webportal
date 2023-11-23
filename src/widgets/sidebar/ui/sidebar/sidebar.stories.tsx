import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './sidebar'
import { ThemeVariant } from '@shared/theme/themeProvider'
import { themeDecorator } from '@shared/libs/storybook/themeDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
    args: {}
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    decorators: [themeDecorator(ThemeVariant.LIGHT)],
    args: {}
}

export const DefaultDark: Story = {
    decorators: [themeDecorator(ThemeVariant.DARK)],
    args: {}
}
