import { ReactNode, type FC } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

const Portal: FC<PortalProps> = ({ children, element }) => {
    const rootElement = document.getElementById('root')

    if (!element && !rootElement) {
        throw new Error('не удалось орисовать модальное окно')
    }

    return createPortal(children, (element || rootElement) as HTMLElement)
}

export { Portal }
