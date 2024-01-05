import { ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { ReducersMapObject } from '@reduxjs/toolkit'

import { createReduxStore } from '../config/store'
import { RootStateSchema } from '../config/rootStateSchema'

interface StoreProviderProps {
    children: ReactNode
    initialState?: RootStateSchema
    asyncReducers?: Partial<ReducersMapObject<RootStateSchema>>
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const store = createReduxStore(initialState, asyncReducers)

    return <Provider store={store}>{children}</Provider>
}

export { StoreProvider }
