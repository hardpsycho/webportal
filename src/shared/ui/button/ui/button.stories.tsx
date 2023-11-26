import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonVariant } from './button'
import { themeDecorator } from '@shared/libs/storybook/themeDecorator'
import { ThemeVariant } from '@shared/theme/themeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
    args: {
        children: 'Button'
    }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {}
}

export const DefaultSmall: Story = {
    args: {
        size: ButtonSize.SMALL
    }
}

export const DefaultLarge: Story = {
    args: {
        size: ButtonSize.LARGE
    }
}

export const Ghost: Story = {
    args: {
        variant: ButtonVariant.GHOST
    }
}

export const Outlined: Story = {
    args: {
        variant: ButtonVariant.OUTLINED
    }
}

export const DefaultDark: Story = {
    decorators: [themeDecorator(ThemeVariant.DARK)],
    args: {}
}

export const GhostDark: Story = {
    decorators: [themeDecorator(ThemeVariant.DARK)],
    args: {
        variant: ButtonVariant.GHOST
    }
}

export const OutlinedDark: Story = {
    decorators: [themeDecorator(ThemeVariant.DARK)],
    args: {
        variant: ButtonVariant.OUTLINED
    }
}

export const DefaultSquareMedium: Story = {
    args: {
        square: true,
        size: ButtonSize.MEDIUM
    }
}

export const DefaultSquareSmall: Story = {
    args: {
        square: true,
        size: ButtonSize.SMALL
    }
}

export const DefaultSquareLarge: Story = {
    args: {
        square: true,
        size: ButtonSize.LARGE
    }
}
