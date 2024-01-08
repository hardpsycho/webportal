import { sessionActions } from '@entities/session'
import { instanceApi } from '@shared/api/instanceApi'
import { loginByUsername } from './loginByUsername'
import { TestAsyncThunk } from '@shared/libs/test/testAsyncThunk'

jest.mock('@shared/api/instanceApi')
const mockedAxios = jest.mocked<typeof instanceApi>(instanceApi)
// const instance = jest.fn(() => mockedAxios)
// axios.create = jest.fn(() => mockedAxios)
// const mockedAxios = jest.mocked<typeof axios>(axios)

describe('test loginByUsername', () => {
    /* let dispatch: Dispatch
    let getState: () => RootStateSchema

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
    })
    it('success thunk', async () => {
        const responseData = { accessToken: '123456token', id: 22 }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: responseData }))
        const asyncThunkAction = loginByUsername({ email: 'test@test.com', password: '123456' })
        const result = await asyncThunkAction(dispatch, getState, undefined)

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(dispatch).toHaveBeenCalledWith(sessionActions.setSession(responseData))
        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(result.payload).toEqual(responseData)
    })

    it('reject thunk', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const asyncThunkAction = loginByUsername({ email: 'test@test.com', password: '123456' })
        const result = await asyncThunkAction(dispatch, getState, undefined)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
    })
 */
    it('success thunk 2', async () => {
        const responseData = { accessToken: '123456token', id: 22 }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: responseData }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callAsyncThunk({ email: 'test@test.com', password: '123456' })

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.dispatch).toHaveBeenCalledWith(sessionActions.setSession(responseData))
        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(result.payload).toEqual(responseData)
    })

    it('reject thunk 2', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callAsyncThunk({
            email: 'test@test.com',
            password: '123456'
        })

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
    })
})
