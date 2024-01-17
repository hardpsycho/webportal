import axios from 'axios'

import { LS_ACCESS_TOKEN } from '@shared/const/localStorage'

export const instanceApi = axios.create({
    baseURL: WP_API,
    withCredentials: true,
    headers: {
        Authorization: `Bearer null`
    }
})

// Add a request interceptor to add the JWT token to the authorization header
instanceApi.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem(LS_ACCESS_TOKEN)
        config.headers.Authorization = `Bearer ${accessToken}`
        return config
    },
    (error) => Promise.reject(error)
)

// Add a response interceptor to refresh the JWT token if it's expired
instanceApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        // If the error is a 401 and we have a refresh token, refresh the JWT token
        if (error.response.status === 401) {
            const response = await instanceApi.get('/api/auth/refresh')
            localStorage.setItem(LS_ACCESS_TOKEN, response.data.accessToken)

            // Re-run the original request that was intercepted
            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`
            instanceApi
                .request(originalRequest)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        // Return the original error if we can't handle it
        return Promise.reject(error)
    }
)
