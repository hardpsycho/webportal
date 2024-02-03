import { createAsyncThunk } from '@reduxjs/toolkit'

import { Profile } from '../../types/profile'
import { ThunkConfig } from '@app/store'

export const createProfileById = createAsyncThunk<
    Profile,
    { id: number; profile: Profile },
    ThunkConfig<string>
>('profile/create', async ({ id, profile }, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.post<Profile>(`/profile/${id}`, profile)

        if (!response.data) {
            throw new Error('something went wrong while creating profile')
        }

        return response.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('profile-error')
    }
})
