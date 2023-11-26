import { type FC } from 'react'

import styles from './navbar.m.scss'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return <div className={styles.navbar}></div>
}

export { Navbar }
