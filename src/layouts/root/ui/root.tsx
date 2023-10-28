import { Suspense, type FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { useTheme } from '@shared/theme/useTheme'

interface RootProps {}

const Root: FC<RootProps> = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <header>
                <nav>
                    <NavLink to={'/'}>Главная</NavLink>
                    <NavLink to={'/about'}>О нас</NavLink>
                </nav>
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
