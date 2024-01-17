import { sessionActions } from '@entities/session'
import { loginByUsername } from './loginByUsername'
import { TestAsyncThunk } from '@shared/libs/test/testAsyncThunk'
describe('test loginByUsername', () => {
    it('success thunk 2', async () => {
        const responseData = { accessToken: '123456token', id: 22 }

        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: responseData }))
        const result = await thunk.callAsyncThunk({ email: 'test@test.com', password: '123456' })

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.dispatch).toHaveBeenCalledWith(sessionActions.setSession(responseData))
        expect(thunk.api.post).toHaveBeenCalledTimes(1)
        expect(result.payload).toEqual(responseData)
    })

    it('reject thunk 2', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callAsyncThunk({
            email: 'test@test.com',
            password: '123456'
        })

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalledTimes(1)
    })
})
