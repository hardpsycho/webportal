import { Dispatch, Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import { RootStateSchemaKey, StoreWithReducerManager } from '@app/store'

export interface ReducerItem {
    key: RootStateSchemaKey
    reducer: Reducer
    notRemoveAfter?: boolean
}

export const useDynamicReducer = (reducers: ReducerItem[]) => {
    const store = useStore() as StoreWithReducerManager
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<Dispatch<any>>()

    useEffect(() => {
        reducers.forEach(({ key, reducer }) => {
            store.reducerManager?.add(key, reducer)
            dispatch({ type: '@add reducer ' + key })
        })

        return () => {
            reducers.forEach(({ key, notRemoveAfter }) => {
                if (!notRemoveAfter) {
                    store.reducerManager?.remove(key)
                    dispatch({ type: '@remove reducer ' + key })
                }
            })
        }
    }, [])
}
