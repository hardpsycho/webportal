import { Suspense, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './errorComponent.m.scss'

interface ErrorComponentProps {
    messageText?: string
}

const ErrorComponent: FC<ErrorComponentProps> = ({ messageText }) => {
    const { t } = useTranslation('error')

    const defaultMessage = t('default_error_message')

    return <div className={styles.errorMessage}>{messageText ? messageText : defaultMessage}</div>
}

const ErrorComponentTiwhSuspense: FC<ErrorComponentProps> = ({ messageText }) => (
    <Suspense>
        <ErrorComponent messageText={messageText} />
    </Suspense>
)

export { ErrorComponentTiwhSuspense }
