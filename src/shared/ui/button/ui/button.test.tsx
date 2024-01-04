import { render, screen } from '@testing-library/react'

import { Button, ButtonSize, ButtonVariant } from './button'

describe('Button test', () => {
    test('default styles', () => {
        render(<Button>Text</Button>)
        screen.debug()
        const btn = screen.getByTestId('btn')
        expect(btn).toHaveClass('button')
        expect(btn).toHaveClass('mediumSize')
        expect(btn).toHaveClass('standart')
    })

    test('large size', () => {
        render(<Button size={ButtonSize.LARGE}>Text</Button>)
        const btn = screen.getByTestId('btn')
        expect(btn).toHaveClass('largeSize')
    })

    test('small size', () => {
        render(<Button size={ButtonSize.SMALL}>Text</Button>)
        const btn = screen.getByTestId('btn')
        expect(btn).toHaveClass('smallSize')
    })

    test('ghost variant', () => {
        render(<Button variant={ButtonVariant.GHOST}>Text</Button>)
        const btn = screen.getByTestId('btn')
        expect(btn).toHaveClass('ghost')
    })
})
