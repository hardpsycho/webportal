import { Suspense, useContext, type FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { ThemeContext } from '@shared/theme/themeContext'

interface RootProps {}

const Root: FC<RootProps> = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

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
