import { type FC } from 'react'

import { AppLink, AppLinkVariant } from '@shared/ui/appLink'
import styles from './navbar.m.scss'
import { ThemeSwitcher } from '@features/themeSwitcher'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return (
        <div className={styles.navbar}>
            <ThemeSwitcher />
            <nav className={styles.links}>
                <AppLink variant={AppLinkVariant.INVERTED} to={'/'}>
                    Главная
                </AppLink>
                <AppLink variant={AppLinkVariant.INVERTED} to={'/about'}>
                    О нас
                </AppLink>
            </nav>
        </div>
    )
}

export { Navbar }
