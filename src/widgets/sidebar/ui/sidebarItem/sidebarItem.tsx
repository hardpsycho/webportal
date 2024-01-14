import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'

import { AppLink, AppLinkVariant } from '@shared/ui/appLink'
import styles from './sidebarItem.m.scss'
import { SidebarItemType } from './../../model/items'

interface SidebarItemProps extends SidebarItemType {
    collapsed?: boolean
}

const SidebarItem: FC<SidebarItemProps> = ({ path, text, Icon, collapsed = false }) => {
    const { t } = useTranslation()

    return (
        <AppLink variant={AppLinkVariant.INVERTED} to={path} className={styles.link}>
            <div>
                <Icon />
            </div>
            <p className={clsx(styles.text, { [styles.collapsed]: collapsed })}>{t(text)}</p>
        </AppLink>
    )
}

export { SidebarItem }
