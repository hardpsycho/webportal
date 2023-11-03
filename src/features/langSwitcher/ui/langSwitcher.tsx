import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant } from '@shared/ui/button'

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const langToggle = function () {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button onClick={langToggle} theme={ButtonVariant.GHOST} className={className}>
            {t('lang-btn')}
        </Button>
    )
}

export { LangSwitcher }
