export interface Session {
    accessToken: string | null
    id: number | null
}

export interface SessionState extends Session {
    isLoading: boolean
}
