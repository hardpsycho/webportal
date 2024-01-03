import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SessionState, Session } from '../types/session'
import { logoutSession } from './../thunk/logoutSession'
import { refreshSession } from '../thunk/refreshSession'

const initialState: SessionState = {
    accessToken: null,
    id: null,
    isLoading: false
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<Session>) => {
            state.id = action.payload.id
            state.accessToken = action.payload.accessToken
        },
        removeSession: (state) => {
            state.id = null
            state.accessToken = null
        }
    },
    extraReducers(builder) {
        builder.addCase(refreshSession.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(refreshSession.fulfilled, (state, action: PayloadAction<Session>) => {
            state.accessToken = action.payload.accessToken
            state.id = action.payload.id
            state.isLoading = false
        })

        builder.addCase(refreshSession.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(logoutSession.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(logoutSession.fulfilled, (state) => {
            state.isLoading = false
            state.id = null
            state.accessToken = null
        })

        builder.addCase(logoutSession.rejected, (state) => {
            state.isLoading = false
            state.id = null
            state.accessToken = null
        })
    }
})

export const { actions: sessionActions } = sessionSlice
export const { reducer: sessionReducer } = sessionSlice
