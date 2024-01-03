import { createAsyncThunk } from '@reduxjs/toolkit'

import { LS_ACCESS_TOKEN } from '@shared/const/localStorage'
import { sessionActions } from '../slice/sessionSlice'
import { instanceApi } from '@shared/api/instanceApi'

export const logoutSession = createAsyncThunk<undefined, null, { rejectValue: string }>(
    'session/logout',
    async (_, thunkAPI) => {
        try {
            await instanceApi.get('/auth/logout')

            thunkAPI.dispatch(sessionActions.removeSession())
            localStorage.removeItem(LS_ACCESS_TOKEN)
        } catch (error) {
            console.log(error)
            localStorage.removeItem(LS_ACCESS_TOKEN)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
