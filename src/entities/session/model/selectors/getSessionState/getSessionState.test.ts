import { getSessionState } from './getSessionState'
import { RootStateSchema } from '@app/store'

describe('getSessionState', () => {
    it('default state', () => {
        const state: Partial<RootStateSchema> = {
            sessionState: {
                accessToken: null,
                id: null,
                isLoading: false
            }
        }

        expect(getSessionState(state as RootStateSchema)).toStrictEqual({
            accessToken: null,
            id: null,
            isLoading: false
        })
    })
})
