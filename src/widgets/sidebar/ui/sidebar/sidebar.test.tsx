import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Sidebar } from './sidebar'
import { RenderWithProviders } from '@shared/libs/test/renderWithProviders'

describe('test', () => {
    test('toggle', async () => {
        RenderWithProviders(<Sidebar />)
        const toggleBtn = screen.queryByTestId('toggle-collapse') as HTMLElement
        expect(toggleBtn).toBeInTheDocument()
        const sidebar = screen.queryByTestId('sidebar')
        screen.debug()
        expect(sidebar).not.toHaveClass('collapsed')
        await userEvent.click(toggleBtn)
        screen.debug()
        expect(sidebar).toHaveClass('collapsed')
    })
})
