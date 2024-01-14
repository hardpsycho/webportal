import HomeIcon from './../assets//images/houseIcon.svg'
import AboutIcon from './../assets/images/aboutIcon.svg'
import ProfileIcon from './../assets/images/profileIcon.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FC<React.SVGProps<SVGElement>>
}

export const sidebarItems: SidebarItemType[] = [
    {
        path: '/',
        text: 'main_page',
        Icon: HomeIcon
    },
    {
        path: '/about',
        text: 'about_page',
        Icon: AboutIcon
    },
    {
        path: '/profile',
        text: 'profile_page',
        Icon: ProfileIcon
    }
]
