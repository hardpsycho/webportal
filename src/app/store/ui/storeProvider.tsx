import { ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'
import { RootStateSchema } from '../config/rootStateSchema'

interface StoreProviderProps {
    children: ReactNode
    initialState?: RootStateSchema
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState)

    return <Provider store={store}>{children}</Provider>
}

export { StoreProvider }
