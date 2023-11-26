import { clsx } from 'clsx'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant, ButtonSize } from '@shared/ui/button'
import { AppLink, AppLinkVariant } from '@shared/ui/appLink'
import styles from './sidebar.m.scss'
import { ThemeSwitcher } from '@features/themeSwitcher'
import { LangSwitcher } from '@features/langSwitcher'
import HomeIcon from './../../assets/images/houseIcon.svg'
import ProfileIcon from './../../assets/images/profileIcon.svg'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const sidebarToggle = function () {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid='sidebar'
            className={clsx(styles.sidebar, { [styles.collapsed]: collapsed })}
        >
            <div className={styles.items}>
                <nav className={styles.links}>
                    <AppLink variant={AppLinkVariant.INVERTED} to={'/'} className={styles.link}>
                        <div>
                            <HomeIcon />
                        </div>
                        <p className={styles.text}>{t('main_page')}</p>
                    </AppLink>
                    <AppLink
                        variant={AppLinkVariant.INVERTED}
                        to={'/about'}
                        className={styles.link}
                    >
                        <div>
                            <ProfileIcon />
                        </div>
                        <p className={styles.text}>{t('about_page')}</p>
                    </AppLink>
                </nav>
            </div>
            <Button
                className={styles.toggleButton}
                data-testid='toggle-collapse'
                onClick={sidebarToggle}
                size={ButtonSize.MEDIUM}
                variant={ButtonVariant.STANDART}
                square={true}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.langSwitcher} />
            </div>
        </div>
    )
}

export { Sidebar }
