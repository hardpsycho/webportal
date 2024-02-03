import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import styles from './navbar.m.scss'
import { Button, ButtonVariant } from '@shared/ui/button'
import { ModalLoginForm } from '@features/authByUsername'
import { getSessionId, logoutSession } from '@entities/session'
import { useAppDispatch } from '@app/store'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation()
    const sessionId = useSelector(getSessionId)
    const dispatch = useAppDispatch()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    const onLogout = () => {
        dispatch(logoutSession())
        setIsLoginModalOpen(false)
    }

    if (sessionId) {
        return (
            <div className={styles.navbar}>
                <Button variant={ButtonVariant.OUTLINED} className={styles.btn} onClick={onLogout}>
                    {t('logout')}
                </Button>
            </div>
        )
    }

    return (
        <div className={styles.navbar}>
            <Button
                variant={ButtonVariant.OUTLINED}
                className={styles.btn}
                onClick={() => setIsLoginModalOpen(true)}
            >
                {t('login')}
            </Button>

            <ModalLoginForm
                isLoginModalOpen={isLoginModalOpen}
                onCLose={() => setIsLoginModalOpen(false)}
            />
        </div>
    )
}

export { Navbar }
