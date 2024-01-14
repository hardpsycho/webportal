import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
    const { t } = useTranslation()

    return <div>{t('profile_page')}</div>
}

export default ProfilePage
