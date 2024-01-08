import { type FC, MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

import { Button } from '@shared/ui/button'
import styles from './loginForm.m.scss'
import { Input } from '@shared/ui/input'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { getLoginEmail } from '../../model/selectors/getEmail/getLoginEmail'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { loginByUsername } from '../../model/thunk/loginByUsername'
import { getLoginIsLoading } from '../../model/selectors/getIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { Text, TextTheme } from '@shared/ui/text'
import { useDynamicReducer } from '@shared/libs/useDynamicReducer/useDynamicReducer'

interface LoginFormProps {
    className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation('auth')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch = useDispatch<Dispatch<any>>()
    const email = useSelector(getLoginEmail)
    const password = useSelector(getPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    useDynamicReducer([{ key: 'loginState', reducer: loginReducer }])

    const onchangeEmail = (value: string) => {
        dispatch(loginActions.setEmail(value))
    }
    const onchangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value))
    }

    const login = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(loginByUsername({ email, password }))
    }

    return (
        <form className={clsx(styles.loginForm, className)}>
            <Text title={t('login_from')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                data-testid='email-input'
                value={email}
                className={styles.input}
                autoFocus
                onChange={onchangeEmail}
                type='text'
            />
            <Input
                data-testid='password-input'
                value={password}
                className={styles.input}
                onChange={onchangePassword}
                type='text'
            />
            <Button
                data-testid='login-btn'
                disabled={isLoading}
                className={styles.loginBtn}
                onClick={login}
                isLoading={isLoading}
            >
                {t('login', { ns: 'translation' })}
            </Button>
        </form>
    )
}

export default LoginForm
