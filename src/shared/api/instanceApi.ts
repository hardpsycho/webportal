import axios from 'axios'

import { LS_ACCESS_TOKEN } from '@shared/const/localStorage'

const accessToken = localStorage.getItem(LS_ACCESS_TOKEN) || 'null'

export const instanceApi = axios.create({
    baseURL: WP_DEV ? 'http://localhost:5000' : 'https://xn--80abcm6aqgjs.xn--p1ai/api/',
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
