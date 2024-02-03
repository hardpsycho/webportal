import { createProfileById } from './createProfileById'
import { TestAsyncThunk } from '@shared/libs/test/testAsyncThunk'
import { Country, Currency } from '@shared/const/common'

const mockedProfile = {
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

describe('test createProfileById', () => {
    it('success thunk', async () => {
        const thunk = new TestAsyncThunk(createProfileById)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: mockedProfile }))
        const result = await thunk.callAsyncThunk({ id: 101, profile: mockedProfile })

        console.log(result)

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.api.post).toHaveBeenCalledTimes(1)
        expect(result.payload).toEqual(mockedProfile)
    })

    it('reject thunk', async () => {
        const thunk = new TestAsyncThunk(createProfileById)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callAsyncThunk({ id: 101, profile: mockedProfile })

        expect(result.meta.requestStatus).toBe('rejected')
        expect(thunk.api.post).toHaveBeenCalledTimes(1)
        expect(result.payload).toEqual('profile-error')
    })
})
