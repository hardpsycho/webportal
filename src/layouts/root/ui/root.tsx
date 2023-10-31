import { Suspense, type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'

import { useTheme } from '@shared/theme/useTheme'
import { Navbar } from '@widgets/navbar'

interface RootProps {}

const Root: FC<RootProps> = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={clsx('app', theme)}>
            <header>
                <Navbar />
                <button onClick={toggleTheme}>сменить тему</button>
            </header>
            <main>
                <Suspense fallback={<>Loading...</>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export { Root }
