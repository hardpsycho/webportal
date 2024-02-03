import { getProfileById } from './getProfileById'
import { TestAsyncThunk } from '@shared/libs/test/testAsyncThunk'
import { Country, Currency } from '@shared/const/common'

const responsedProfile = {
    userId: 101,
    name: 'John',
    secondName: 'Doe',
    age: 88,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    nick: 'FireInside',
    avatar: 'http://pictures.com/avatar.jpg'
}

describe('test getProfileById', () => {
    it('success thunk', async () => {
        const thunk = new TestAsyncThunk(getProfileById)
        thunk.api.get.mockReturnValue(Promise.resolve({ data: responsedProfile }))
        const result = await thunk.callAsyncThunk(101)

        console.log(result)

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.api.get).toHaveBeenCalledTimes(1)
        expect(result.payload).toEqual(responsedProfile)
    })

    it('reject thunk 2', async () => {
        const thunk = new TestAsyncThunk(getProfileById)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callAsyncThunk(101)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.api.get).toHaveBeenCalledTimes(1)
        expect(result.payload).toEqual('profile-error')
    })
})
