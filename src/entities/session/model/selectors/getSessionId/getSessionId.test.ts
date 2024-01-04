import { getSessionId } from './getSessionId'
import { RootStateSchema } from '@app/store'

describe('getSessionIsLoading', () => {
    it('default id', () => {
        const state: Partial<RootStateSchema> = {
            sessionState: {
                accessToken: null,
                id: null,
                isLoading: false
            }
        }

        expect(getSessionId(state as RootStateSchema)).toBeNull()
    })
})
