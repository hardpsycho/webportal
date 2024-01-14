import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant } from '@shared/ui/button'

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }) => {
    const { t, i18n } = useTranslation()

    const langToggle = function () {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button onClick={langToggle} variant={ButtonVariant.GHOST} className={className}>
            {t('lang-btn')}
        </Button>
    )
})

LangSwitcher.displayName = 'LangSwitcher'

export { LangSwitcher }
