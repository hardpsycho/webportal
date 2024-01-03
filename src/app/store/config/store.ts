import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'

import { RootStateSchema } from './rootStateSchema'
import { userReducer } from '@entities/user'
import { loginReducer } from '@features/authByUsername/model/slice/loginSlice'
import { sessionReducer } from '@entities/session'

export function createReduxStore(initialState?: RootStateSchema) {
    const rootReducer: ReducersMapObject<RootStateSchema> = {
        userState: userReducer,
        loginState: loginReducer,
        sessionState: sessionReducer
    }

    return configureStore<RootStateSchema>({
        reducer: rootReducer,
        devTools: WP_DEV,
        preloadedState: initialState
    })
}
