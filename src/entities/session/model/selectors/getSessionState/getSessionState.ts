import { RootStateSchema } from '@app/store'

export const getSessionState = (rootState: RootStateSchema) => rootState.sessionState
