import { createAsyncThunk } from '@reduxjs/toolkit'

import { Profile } from '../../types/profile'
import { ThunkConfig } from '@app/store'

export const getProfileById = createAsyncThunk<Profile, number, ThunkConfig<string>>(
    'profile/get',
    async (id, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>(`/profile/${id}`)

            console.log('response', response)

            if (!response.data) throw new Error('bad request for profile')

            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('profile-error')
        }
    }
)
