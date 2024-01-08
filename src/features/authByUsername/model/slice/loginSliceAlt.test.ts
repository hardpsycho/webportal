import { loginByUsername } from '../thunk/loginByUsername'
import { LoginState } from '../types/loginState'
import { loginReducer } from './loginSlice'

describe('loginSLice', () => {
    const initialState: LoginState = {
        email: '',
        password: '',
        isLoading: false
    }

    it('extra reducer pending', () => {
        const state = loginReducer(
            initialState,
            loginByUsername.pending('6666', { email: 'test@test.com', password: '123' }, null)
        )

        console.log(state)
    })

    it('extra reducer fulfilled', () => {
        const state = loginReducer(
            initialState,
            loginByUsername.fulfilled({ accessToken: 'dsdasd', id: 232 }, '456456', {
                email: 'test@test.com',
                password: '123'
            })
        )

        console.log(state)
    })

    it('extra reducer rejected', () => {
        const state = loginReducer(
            initialState,
            loginByUsername.rejected(
                { name: 'err', message: 'oh, erorr' },
                '456456',
                {
                    email: 'test@test.com',
                    password: '123'
                },
                'errrorrrrr'
            )
        )

        console.log(state)
    })
})
