import { createAsyncThunk } from '@reduxjs/toolkit'

import { Profile } from '../../types/profile'
import { ThunkConfig } from '@app/store'

export const updateProfileById = createAsyncThunk<
    Profile,
    { id: number; profile: Profile },
    ThunkConfig<string>
>('profile/update', async ({ id, profile }, thunkAPI) => {
    try {
        const respose = await thunkAPI.extra.api.patch<Profile>(`/profile/${id}`, profile)

        if (!respose.data) {
            throw new Error('something went wrong while updating profile')
        }

        return respose.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('profile-error')
    }
})
