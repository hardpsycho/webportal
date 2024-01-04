import { RootStateSchema } from '@app/store'

export function getLoginState(state: RootStateSchema) {
    return state.loginState
}
