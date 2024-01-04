import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import 'react-redux'

import LoginForm from './loginForm'
import { RenderWithProviders } from '@shared/libs/test/renderWithProviders'

// jest.spyOn(ReactRedux, 'useDispatch').mockImplementation(() => loginFn)

// const loginFn = jest.fn((data: any) => console.log(data))

const loginFn = jest.fn()

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => loginFn
}))

describe('loginForm', () => {
    it('fields exist', () => {
        // проверяем что поля просто существуют
        RenderWithProviders(<LoginForm />)
        const emailInput = screen.getByTestId('email-input')
        const passwordInput = screen.getByTestId('password-input')
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
    })

    it('initial state email', () => {
        RenderWithProviders(<LoginForm />, {
            initialState: {
                loginState: {
                    email: 'test@test.com', // в initial state ставим свое значение email
                    password: '',
                    isLoading: false
                }
            }
        })
        const emailInput = screen.getByTestId('email-input')
        expect(emailInput).toHaveValue('test@test.com') //проверяем что там это значение
    })

    it('initial state password', () => {
        RenderWithProviders(<LoginForm />, {
            initialState: {
                loginState: {
                    email: '',
                    password: 'qwerty', // в initial state ставим свое значение password
                    isLoading: false
                }
            }
        })
        const passwordInput = screen.getByTestId('password-input')
        expect(passwordInput).toHaveValue('qwerty') //проверяем что там это значение
    })

    it('click login', async () => {
        // мокаем диспатч и проверяем что он вызывался при клике по кнопке
        RenderWithProviders(<LoginForm />, {
            initialState: {
                loginState: {
                    email: '',
                    password: '',
                    isLoading: false
                }
            }
        })
        const loginBtn = screen.getByTestId('login-btn')
        await userEvent.click(loginBtn)
        expect(loginFn).toHaveBeenCalledTimes(1)
    })
})
