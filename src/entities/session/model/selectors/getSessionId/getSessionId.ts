import { createSelector } from '@reduxjs/toolkit'

import { SessionState } from '../../types/session'
import { getSessionState } from '../getSessionState/getSessionState'

export const getSessionId = createSelector(getSessionState, (state: SessionState) => state.id)
