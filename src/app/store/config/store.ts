import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { RootStateSchema, StoreWithReducerManager } from './rootStateSchema'
import { sessionReducer } from '@entities/session'
import { createReducerManager } from './reducerManager'

export function createReduxStore(
    initialState?: RootStateSchema,
    asyncReducers?: Partial<ReducersMapObject<RootStateSchema>>
) {
    const staticReducer: ReducersMapObject<RootStateSchema> = {
        sessionState: sessionReducer,
        ...asyncReducers
    }

    const reducerManager = createReducerManager(staticReducer)

    const store: StoreWithReducerManager = configureStore<RootStateSchema>({
        reducer: reducerManager.reduce as Reducer,
        devTools: WP_DEV,
        preloadedState: initialState
    })

    store.reducerManager = reducerManager

    return store
}

type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = useDispatch<AppDispatch>
