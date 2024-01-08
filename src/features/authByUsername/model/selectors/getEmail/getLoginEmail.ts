import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getLoginState'

export const getLoginEmail = createSelector(getLoginState, (loginState) => loginState?.email || '')
