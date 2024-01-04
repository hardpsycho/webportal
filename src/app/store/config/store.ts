import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'

import { RootStateSchema } from './rootStateSchema'
import { loginReducer } from '@features/authByUsername/model/slice/loginSlice'
import { sessionReducer } from '@entities/session'

export function createReduxStore(initialState?: RootStateSchema) {
    const rootReducer: ReducersMapObject<RootStateSchema> = {
        loginState: loginReducer,
        sessionState: sessionReducer
    }

    return configureStore<RootStateSchema>({
        reducer: rootReducer,
        devTools: WP_DEV,
        preloadedState: initialState
    })
}
