import { RootStateSchema } from '@app/store'
import { getLoginState } from './getLoginState'

describe('test selector getLoginState', () => {
    it('get default loginState', () => {
        const defaultState: Partial<RootStateSchema> = {
            loginState: {
                email: '',
                password: '',
                isLoading: false
            }
        }

        expect(getLoginState(defaultState as RootStateSchema)).toStrictEqual({
            email: '',
            password: '',
            isLoading: false
        })
    })

    it('get loginState with empty state', () => {
        const defaultState: Partial<RootStateSchema> = {}

        expect(getLoginState(defaultState as RootStateSchema)).toBeUndefined()
    })
})
