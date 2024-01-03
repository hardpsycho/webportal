import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getSessionIsLoading, refreshSession } from '@entities/session'

export const useInitialAuth = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispath = useDispatch<Dispatch<any>>()
    const sessionIsLoading = useSelector(getSessionIsLoading)

    useEffect(() => {
        dispath(refreshSession())
    }, [])

    return { isLoading: sessionIsLoading }
}
