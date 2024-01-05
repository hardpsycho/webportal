import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getLoginState'

export const getIsLoading = createSelector(
    getLoginState,
    (loginState) => loginState?.isLoading || false
)
