import { Suspense, type FC } from 'react'

import { Modal } from '@shared/ui/modal'
import { LoginFormLazy } from '../loginForm/loginForm.lazy'
import { Spinner } from '@shared/ui/spinner'

interface ModalLoginFormProps {
    isLoginModalOpen: boolean
    onCLose: () => void
}

const ModalLoginForm: FC<ModalLoginFormProps> = ({ isLoginModalOpen, onCLose }) => {
    return (
        <Modal isOpen={isLoginModalOpen} onCLose={onCLose}>
            <Suspense fallback={<Spinner />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    )
}

export { ModalLoginForm }
