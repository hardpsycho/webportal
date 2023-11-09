import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation()

    return <div>{t('not_found_page')}</div>
}

export { NotFoundPage }
