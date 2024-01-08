import { RootStateSchema } from '@app/store'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('test selector getLoginIsLoading', () => {
    it('get default getLoginIsLoading', () => {
        const defaultState: Partial<RootStateSchema> = {
            loginState: {
                email: '',
                password: '',
                isLoading: false
            }
        }

        expect(getLoginIsLoading(defaultState as RootStateSchema)).toBeFalsy()
    })

    it('get getLoginIsLoading with empty state', () => {
        const defaultState: Partial<RootStateSchema> = {}

        expect(getLoginIsLoading(defaultState as RootStateSchema)).toBeFalsy()
    })
})
