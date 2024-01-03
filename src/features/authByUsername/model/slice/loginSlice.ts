import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { LoginState } from '../types/loginState'
import { loginByUsername } from '../thunk/loginByUsername'

const initialState: LoginState = {
    email: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })

        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.email = ''
            state.password = ''
            state.isLoading = false
        })

        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
