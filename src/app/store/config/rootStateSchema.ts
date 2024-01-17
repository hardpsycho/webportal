import { Dispatch, configureStore } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'

import { SessionState } from '@entities/session'
import { LoginState } from '@features/authByUsername'
import { createReducerManager } from './reducerManager'

export interface RootStateSchema {
    loginState?: LoginState
    sessionState: SessionState
}

export type RootStateSchemaKey = keyof RootStateSchema

export type StoreWithReducerManager = ReturnType<typeof configureStore<RootStateSchema>> & {
    reducerManager?: ReturnType<typeof createReducerManager>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = StoreWithReducerManager['dispatch'] & Dispatch<any>

export interface ThunkExtraArgs {
    api: AxiosInstance
}

export interface ThunkConfig<T = string> {
    rejectValue: T
    extra: ThunkExtraArgs
}
