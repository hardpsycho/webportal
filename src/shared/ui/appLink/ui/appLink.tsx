import { clsx } from 'clsx'
import { ReactNode, type FC, memo } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

import styles from './appLink.m.scss'

export enum AppLinkVariant {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends NavLinkProps {
    children: ReactNode
    to: string
    variant?: AppLinkVariant
}

const AppLink: FC<AppLinkProps> = memo(
    ({ children, to, variant = AppLinkVariant.PRIMARY, className, ...otherProps }) => {
        return (
            <NavLink
                {...otherProps}
                to={to}
                className={clsx(styles.appLink, styles[variant], className)}
            >
                {children}
            </NavLink>
        )
    }
)

AppLink.displayName = 'AppLink'

export { AppLink }
