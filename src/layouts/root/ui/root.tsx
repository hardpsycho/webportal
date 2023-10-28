import { Suspense, type FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

interface RootProps {}

const Root: FC<RootProps> = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to={'/'}>Главная</NavLink>
                    <NavLink to={'/about'}>О нас</NavLink>
                </nav>
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
