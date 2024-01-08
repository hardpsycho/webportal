import { createAsyncThunk } from '@reduxjs/toolkit'

import { instanceApi } from '@shared/api/instanceApi'
import { LS_ACCESS_TOKEN } from '@shared/const/localStorage'
import { sessionActions, Session } from '@entities/session'

export const loginByUsername = createAsyncThunk<
    Session,
    { email: string; password: string },
    { rejectValue: string }
>('login/loginByUsername', async ({ email, password }, thunkAPI) => {
    try {
        const response = await instanceApi.post<Session>('/auth/login', {
            email,
            password
        })

        if (!response.data || !response.data.accessToken) {
            throw new Error('error')
        }

        localStorage.setItem(LS_ACCESS_TOKEN, response.data.accessToken)
        thunkAPI.dispatch(sessionActions.setSession(response.data))

        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue('error')
    }
})
