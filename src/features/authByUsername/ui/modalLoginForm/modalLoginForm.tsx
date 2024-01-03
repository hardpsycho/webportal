import { type FC } from 'react'

import { Modal } from '@shared/ui/modal'
import { LoginForm } from '../loginForm/loginForm'
// import styles from './modalLoginForm.m.css'

interface ModalLoginFormProps {
    isLoginModalOpen: boolean
    onCLose: () => void
}

const ModalLoginForm: FC<ModalLoginFormProps> = ({ isLoginModalOpen, onCLose }) => {
    return (
        <Modal isOpen={isLoginModalOpen} onCLose={onCLose}>
            <LoginForm />
        </Modal>
    )
}

export { ModalLoginForm }
