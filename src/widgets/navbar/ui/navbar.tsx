import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './navbar.m.scss'
import { Button, ButtonVariant } from '@shared/ui/button'
import { Modal } from '@shared/ui/modal'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    return (
        <div className={styles.navbar}>
            <Button
                variant={ButtonVariant.OUTLINED}
                className={styles.btn}
                onClick={() => setIsLoginModalOpen(true)}
            >
                {t('login')}
            </Button>
            <Modal isOpen={isLoginModalOpen} onCLose={() => setIsLoginModalOpen(false)}>
                &
            </Modal>
        </div>
    )
}

export { Navbar }
