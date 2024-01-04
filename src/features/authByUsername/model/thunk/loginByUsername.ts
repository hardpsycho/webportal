import { createAsyncThunk } from '@reduxjs/toolkit'

import { instanceApi } from '@shared/api/instanceApi'
import i18n from '@shared/config/i18n/i18n'
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
        console.log(error)
        return thunkAPI.rejectWithValue(i18n.t('login_error', { ns: 'auth' }))
    }
})
