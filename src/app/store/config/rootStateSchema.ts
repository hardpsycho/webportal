import { SessionState } from '@entities/session'
import { LoginState } from '@features/authByUsername'

export interface RootStateSchema {
    loginState: LoginState
    sessionState: SessionState
}
