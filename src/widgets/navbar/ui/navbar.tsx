import { type FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navbar.m.scss'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return (
        <div className={styles.navbar}>
            <nav>
                <NavLink to={'/'}>Главная</NavLink>
                <NavLink to={'/about'}>О нас</NavLink>
            </nav>
        </div>
    )
}

export { Navbar }
