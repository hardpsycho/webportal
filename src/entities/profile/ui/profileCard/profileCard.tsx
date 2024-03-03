import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'

import styles from './profileCard.m.scss'
import { Spinner } from '@shared/ui/spinner'
import { Profile } from '../../model/types/profile'
import { Text, TextAlign, TextTheme } from '@shared/ui/text'

interface ProfileCardProps {
    className?: string
    profile?: Profile
    error?: string
    isLoading?: boolean
}

const ProfileCard: FC<ProfileCardProps> = ({ isLoading, profile, error, className = '' }) => {
    const { t } = useTranslation('profile')
    if (isLoading) {
        return (
            <div className={clsx(styles.profile, className)}>
                <Spinner width='40' height='40' />
            </div>
        )
    }

    if (error) {
        return (
            <div className={clsx(styles.profile, className)}>
                <Text title={t('profile-loading-error')} theme={TextTheme.ERROR} align={TextAlign.CENTER} />
            </div>
        )
    }

    return (
        <div className={clsx(styles.profile, className)}>
            <div>{profile?.name}</div>
            <div>{profile?.secondName}</div>
        </div>
    )
}

export { ProfileCard }
