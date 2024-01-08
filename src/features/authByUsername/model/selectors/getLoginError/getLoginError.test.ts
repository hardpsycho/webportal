import { RootStateSchema } from '@app/store'
import { getLoginError } from './getLoginError'

describe('test selector getLoginError', () => {
    it('get default loginState', () => {
        const defaultState: Partial<RootStateSchema> = {
            loginState: {
                email: '',
                password: '',
                isLoading: false
            }
        }

        expect(getLoginError(defaultState as RootStateSchema)).toBe('')
    })

    it('get getLoginError with empty state', () => {
        const defaultState: Partial<RootStateSchema> = {}

        expect(getLoginError(defaultState as RootStateSchema)).toBe('')
    })
})
