import { clsx } from 'clsx'
import { useState, type FC } from 'react'

import { Button, ButtonVariant, ButtonSize } from '@shared/ui/button'
import styles from './sidebar.m.scss'
import { ThemeSwitcher } from '@features/themeSwitcher'
import { LangSwitcher } from '@features/langSwitcher'
import { sidebarItems } from './../../model/items'
import { SidebarItem } from '../sidebarItem/sidebarItem'

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
            <div className={styles.items}>
                <nav className={styles.links}>
                    {sidebarItems.map((item) => {
                        return (
                            <SidebarItem
                                key={item.path}
                                path={item.path}
                                text={item.text}
                                Icon={item.Icon}
                                collapsed={collapsed}
                            />
                        )
                    })}
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
