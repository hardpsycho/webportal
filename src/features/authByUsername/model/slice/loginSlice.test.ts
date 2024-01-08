import { LoginState } from '../types/loginState'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSLice', () => {
    let state: LoginState

    beforeEach(() => {
        state = {
            email: '',
            password: '',
            isLoading: false
        }
    })
    it('setEmail', () => {
        expect(loginReducer(state, loginActions.setEmail('test@test.com'))).toStrictEqual({
            email: 'test@test.com',
            password: '',
            isLoading: false
        })
    })

    it('setPassword', () => {
        expect(loginReducer(state, loginActions.setPassword('qwerty'))).toStrictEqual({
            email: '',
            password: 'qwerty',
            isLoading: false
        })
    })

    it('setIsLoading', () => {
        expect(loginReducer(state, loginActions.setIsLoading(true))).toStrictEqual({
            email: '',
            password: '',
            isLoading: true
        })
    })

    it('setError', () => {
        expect(loginReducer(state, loginActions.setError('error'))).toStrictEqual({
            email: '',
            password: '',
            isLoading: false,
            error: 'error'
        })
    })
})
