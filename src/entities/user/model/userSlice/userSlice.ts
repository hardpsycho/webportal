import { createSlice } from '@reduxjs/toolkit'

import { UserState } from '../schema/user'

const initialState: UserState = {
    authData: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
