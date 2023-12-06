import { configureStore } from '@reduxjs/toolkit'

import { RootStateSchema } from './rootStateSchema'

export function createReduxStore(initialState?: RootStateSchema) {
    return configureStore<RootStateSchema>({
        reducer: {},
        devTools: WP_DEV,
        preloadedState: initialState
    })
}
