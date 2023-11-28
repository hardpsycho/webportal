import { Suspense, type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'

import { useTheme } from '@shared/theme/useTheme'
import { Navbar } from '@widgets/navbar'
import { Sidebar } from '@widgets/sidebar'
import styles from './root.m.scss'
import { PageSpinner } from '@shared/ui/pageSpinner'
import { ErrorBoundary } from '@shared/ui/errorBoundary'

interface RootProps {}

const Root: FC<RootProps> = () => {
    const { theme } = useTheme()

    return (
        <div id='root' className={clsx('app', theme)}>
            <header>
                <Navbar />
            </header>
            <div className={styles.heroSection}>
                <aside className={styles.aside}>
                    <Sidebar />
                </aside>
                <main className={styles.main}>
                    <Suspense fallback={<PageSpinner />}>
                        <ErrorBoundary>
                            <Outlet />
                        </ErrorBoundary>
                    </Suspense>
                </main>
            </div>
        </div>
    )
}

export { Root }
