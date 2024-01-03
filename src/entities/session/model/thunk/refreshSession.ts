import { createAsyncThunk } from '@reduxjs/toolkit'

import { LS_ACCESS_TOKEN } from '@shared/const/localStorage'
import { sessionActions } from '../slice/sessionSlice'
import { instanceApi } from '@shared/api/instanceApi'
import { Session } from '../types/session'

export const refreshSession = createAsyncThunk<Session, undefined, { rejectValue: string }>(
    'session/refresh',
    async (_, thunkAPI) => {
        try {
            const response = await instanceApi.get<Session>('/auth/refresh')

            if (!response.data || !response.data.accessToken) {
                thunkAPI.dispatch(sessionActions.removeSession())
                throw new Error('error')
            }

            thunkAPI.dispatch(sessionActions.setSession(response.data))
            localStorage.setItem(LS_ACCESS_TOKEN, response.data.accessToken)
            return response.data
        } catch (error) {
            console.log(error)
            localStorage.removeItem(LS_ACCESS_TOKEN)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
