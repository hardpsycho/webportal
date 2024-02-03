import { Tuple, UnknownAction, configureStore } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
// eslint-disable-next-line import/no-unresolved
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

import { SessionState } from '@entities/session'
import { LoginState } from '@features/authByUsername'
import { createReducerManager } from './reducerManager'

export interface RootStateSchema {
    loginState?: LoginState
    sessionState: SessionState
}

export type StoreMiddleware = Tuple<
    [
        ThunkMiddlewareFor<
            RootStateSchema,
            {
                thunk: {
                    extraArgument: {
                        api: AxiosInstance
                    }
                }
            }
        >
    ]
>

export type RootStateSchemaKey = keyof RootStateSchema

export type StoreWithReducerManager = ReturnType<
    typeof configureStore<RootStateSchema, UnknownAction, StoreMiddleware>
> & {
    reducerManager?: ReturnType<typeof createReducerManager>
}

export type AppDispatch = StoreWithReducerManager['dispatch']

/* export type AppDispatch = ThunkDispatch<
    RootStateSchema,
    {
        api: AxiosInstance
    },
    UnknownAction
> &
    Dispatch<UnknownAction> */

export interface ThunkExtraArgs {
    api: AxiosInstance
}

export interface ThunkConfig<T = string> {
    rejectValue: T
    extra: ThunkExtraArgs
}
