import { ReactNode, type FC, MouseEvent, useEffect, useState, useRef } from 'react'
import { clsx } from 'clsx'

import styles from './modal.m.scss'
import { Portal } from '@shared/ui/portal'

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onCLose: () => void
    portal?: HTMLElement
}

const Modal: FC<ModalProps> = (props) => {
    const { children, className = '', isOpen, onCLose, portal } = props
    const [willClose, setWillClose] = useState(false)
    const [willOpen, setWillOpen] = useState(false)
    const timeRef = useRef<NodeJS.Timeout | null>(null)

    function clickContentHandler(e: MouseEvent<HTMLElement>) {
        e.stopPropagation()
    }

    function closeHandler() {
        setWillClose(true)
        setWillOpen(false)
    }

    function onEscDown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }

    useEffect(() => {
        if (willClose) {
            timeRef.current = setTimeout(() => {
                onCLose()
                setWillClose(false)
            }, 500)

            return () => {
                if (timeRef.current) {
                    clearTimeout(timeRef.current)
                }
            }
        }

        if (isOpen) {
            setWillOpen(true)
        }
    }, [willClose])

    useEffect(() => {
        if (isOpen) {
            setWillOpen(true)
            window.addEventListener('keydown', onEscDown)

            return () => {
                window.removeEventListener('keydown', onEscDown)
            }
        }
    }, [isOpen])

    if (!isOpen) {
        return null
    }

    return (
        <Portal element={portal}>
            <div
                className={clsx(
                    styles.modal,
                    {
                        [styles.close]: willClose,
                        [styles.willOpen]: isOpen,
                        [styles.open]: willOpen
                    },
                    className
                )}
            >
                <div className={clsx(styles.overlay)} onClick={closeHandler}>
                    <div className={styles.content} onClick={clickContentHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export { Modal }
