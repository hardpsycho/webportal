import { removeProfileById } from './removeProfileById'
import { TestAsyncThunk } from '@shared/libs/test/testAsyncThunk'
describe('test removeProfileById', () => {
    it('success thunk', async () => {
        const thunk = new TestAsyncThunk(removeProfileById)
        thunk.api.delete.mockReturnValue(Promise.resolve({ data: 101 }))
        const result = await thunk.callAsyncThunk(101)

        console.log(result)

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.api.delete).toHaveBeenCalledTimes(1)
        expect(result.payload).toBe(101)
    })

    it('reject thunk', async () => {
        const thunk = new TestAsyncThunk(removeProfileById)
        thunk.api.delete.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callAsyncThunk(101)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.api.delete).toHaveBeenCalledTimes(1)
        expect(result.payload).toEqual('profile-error')
    })
})
