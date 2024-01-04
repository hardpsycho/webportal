import { sessionActions, sessionReducer } from './sessionSlice'
// import { SessionState } from './../schema/session'

describe('sessionState reducer', () => {
    it('default sessionState', () => {
        expect(
            sessionReducer(
                undefined,
                sessionActions.setSession({
                    accessToken: 'qwerty',
                    id: 10
                })
            )
        ).toStrictEqual({
            accessToken: 'qwerty',
            id: 10,
            isLoading: false
        })
    })

    it('setSession', () => {
        expect(
            sessionReducer(
                {
                    accessToken: 'qwerty',
                    id: 10,
                    isLoading: false
                },
                sessionActions.setSession({
                    accessToken: 'asd',
                    id: 100
                })
            )
        ).toStrictEqual({
            accessToken: 'asd',
            id: 100,
            isLoading: false
        })
    })

    it('removeSession', () => {
        expect(
            sessionReducer(
                {
                    accessToken: 'qwerty',
                    id: 10,
                    isLoading: false
                },
                sessionActions.removeSession()
            )
        ).toStrictEqual({
            accessToken: null,
            id: null,
            isLoading: false
        })
    })
})
