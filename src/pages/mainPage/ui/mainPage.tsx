import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface MainProps {}

const MainPage: FC<MainProps> = () => {
    const { t } = useTranslation()

    return <div>{t('main_page')}</div>
}

export default MainPage
