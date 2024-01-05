import { EnhancedStore } from '@reduxjs/toolkit'

import { SessionState } from '@entities/session'
import { LoginState } from '@features/authByUsername'
import { createReducerManager } from './reducerManager'

export interface RootStateSchema {
    loginState?: LoginState
    sessionState: SessionState
}

export type RootStateSchemaKey = keyof RootStateSchema

export interface StoreWithReducerManager extends EnhancedStore<RootStateSchema> {
    reducerManager?: ReturnType<typeof createReducerManager>
}
