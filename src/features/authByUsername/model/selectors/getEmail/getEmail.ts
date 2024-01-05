import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getLoginState'

export const getEmail = createSelector(getLoginState, (loginState) => loginState?.email || '')
