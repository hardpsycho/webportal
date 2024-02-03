import { Reducer, ReducersMapObject, UnknownAction, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import {
    RootStateSchema,
    StoreWithReducerManager,
    AppDispatch,
    StoreMiddleware
} from './rootStateSchema'
import { sessionReducer } from '@entities/session'
import { createReducerManager } from './reducerManager'
import { instanceApi } from '@shared/api/instanceApi'

export function createReduxStore(
    initialState?: RootStateSchema,
    asyncReducers?: Partial<ReducersMapObject<RootStateSchema>>
) {
    const staticReducer: ReducersMapObject<RootStateSchema> = {
        sessionState: sessionReducer,
        ...asyncReducers
    }

    const reducerManager = createReducerManager(staticReducer)

    const store: StoreWithReducerManager = configureStore<
        RootStateSchema,
        UnknownAction,
        StoreMiddleware
    >({
        reducer: reducerManager.reduce as Reducer,
        devTools: WP_DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: instanceApi
                    }
                }
            })
    })

    store.reducerManager = reducerManager

    return store
}

export const useAppDispatch = useDispatch<AppDispatch>
