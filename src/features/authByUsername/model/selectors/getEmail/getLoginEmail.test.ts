import { RootStateSchema } from '@app/store'
import { getLoginEmail } from './getLoginEmail'

describe('test selector getLoginEmail', () => {
    it('get default getLoginEmail', () => {
        const defaultState: Partial<RootStateSchema> = {
            loginState: {
                email: '',
                password: '',
                isLoading: false
            }
        }

        expect(getLoginEmail(defaultState as RootStateSchema)).toBe('')
    })

    it('get getLoginEmail with empty state', () => {
        const defaultState: Partial<RootStateSchema> = {}

        expect(getLoginEmail(defaultState as RootStateSchema)).toBe('')
    })
})
