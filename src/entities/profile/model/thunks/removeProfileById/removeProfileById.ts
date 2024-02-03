import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@app/store'

export const removeProfileById = createAsyncThunk<number, number, ThunkConfig<string>>(
    'profile/remove',
    async (id, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.delete<number>(`/profile/${id}`)

            if (!response.data) {
                throw new Error('something went wrong while creating profile')
            }

            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue('profile-error')
        }
    }
)
