import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AppLink, AppLinkVariant } from '@shared/ui/appLink'
import styles from './navbar.m.scss'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.navbar}>
            <nav className={styles.links}>
                <AppLink variant={AppLinkVariant.INVERTED} to={'/'}>
                    {t('main_page')}
                </AppLink>
                <AppLink variant={AppLinkVariant.INVERTED} to={'/about'}>
                    {t('about_page')}
                </AppLink>
            </nav>
        </div>
    )
}

export { Navbar }
