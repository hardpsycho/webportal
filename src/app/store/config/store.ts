import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'

import { RootStateSchema } from './rootStateSchema'
import { userReducer } from '@entities/user'

export function createReduxStore(initialState?: RootStateSchema) {
    const rootReducer: ReducersMapObject<RootStateSchema> = {
        userState: userReducer
    }

    return configureStore<RootStateSchema>({
        reducer: rootReducer,
        devTools: WP_DEV,
        preloadedState: initialState
    })
}
