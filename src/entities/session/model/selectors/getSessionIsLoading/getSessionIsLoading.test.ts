import { getSessionIsLoading } from './getSessionIsLoading'
import { RootStateSchema } from '@app/store'

describe('getSessionIsLoading', () => {
    it('default isLoading', () => {
        const state: Partial<RootStateSchema> = {
            sessionState: {
                accessToken: null,
                id: null,
                isLoading: false
            }
        }

        expect(getSessionIsLoading(state as RootStateSchema)).toBeFalsy()
    })
})
