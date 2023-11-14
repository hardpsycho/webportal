import { clsx } from 'clsx'
import { useState, type FC } from 'react'

import { Button, ButtonVariant } from '@shared/ui/button'
import styles from './sidebar.m.scss'
import { ThemeSwitcher } from '@features/themeSwitcher'
import { LangSwitcher } from '@features/langSwitcher'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const [collapsed, setCollapsed] = useState(false)

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
                {collapsed ? 'Открыть' : 'закрыть'}
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.themeSwitcher} />
            </div>
        </div>
    )
}

export { Sidebar }
