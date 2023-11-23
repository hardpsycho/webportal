import { clsx } from 'clsx'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonVariant } from '@shared/ui/button'
import styles from './sidebar.m.scss'
import { ThemeSwitcher } from '@features/themeSwitcher'
import { LangSwitcher } from '@features/langSwitcher'

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
            <Button
                data-testid='toggle-collapse'
                onClick={sidebarToggle}
                theme={ButtonVariant.GHOST}
            >
                {collapsed ? t('open') : t('close')}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.themeSwitcher} />
            </div>
        </div>
    )
}

export { Sidebar }
