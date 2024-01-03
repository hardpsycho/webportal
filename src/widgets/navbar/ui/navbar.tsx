import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit'

import styles from './navbar.m.scss'
import { Button, ButtonVariant } from '@shared/ui/button'
import { ModalLoginForm } from '@features/authByUsername'
import { getSessionId, logoutSession } from '@entities/session'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation()
    const sessionId = useSelector(getSessionId)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispath = useDispatch<Dispatch<any>>()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    const onLogout = () => {
        console.log('click')
        setIsLoginModalOpen(false)
        dispath(logoutSession(null))
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
