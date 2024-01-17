import { loginByUsername } from './loginByUsername'
import { instanceApi } from '@shared/api/instanceApi'

jest.mock('@shared/api/instanceApi')

const mockedInstance = jest.mocked<typeof instanceApi>(instanceApi)

describe('test loginByUsername alternative variant', () => {
    it('async thunk fullfilled', async () => {
        const dispatch = jest.fn()
        const mockDAta = { accessToken: '12345token', id: 100 }
        mockedInstance.post.mockReturnValue(Promise.resolve({ data: mockDAta }))

        const thunk = loginByUsername({ email: 'test@test.com', password: 'qwerty' })
        await thunk(dispatch, () => {}, { api: mockedInstance })

        const dispatch3 = dispatch.mock.calls[2]

        expect(dispatch3[0].type).toBe('login/loginByUsername/fulfilled')
    })

    it('async thunk rejected', async () => {
        const dispatch = jest.fn()
        mockedInstance.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = loginByUsername({ email: 'test@test.com', password: 'qwerty' })
        await thunk(dispatch, () => {}, { api: mockedInstance })

        const dispatch2 = dispatch.mock.calls[1]

        expect(dispatch2[0].type).toBe('login/loginByUsername/rejected')
        expect(dispatch2[0].payload).toBe('error')
    })
})
