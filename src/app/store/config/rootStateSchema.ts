import { SessionState } from '@entities/session'
import { UserState } from '@entities/user'
import { LoginState } from '@features/authByUsername'

export interface RootStateSchema {
    userState: UserState
    loginState: LoginState
    sessionState: SessionState
}
