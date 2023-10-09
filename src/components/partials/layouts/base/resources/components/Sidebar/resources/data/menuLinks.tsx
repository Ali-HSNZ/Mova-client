import { type TSidebarLink } from '..'
import {
    IconAward,
    IconCircleCheck,
    IconCirclePlus,
    IconClock,
    IconDownload,
    IconHeart,
    IconHome,
    IconLogout,
    IconStar,
    IconUser,
} from '@tabler/icons-react'

const MENU_LINKS: TSidebarLink[] = [
    {
        id: 0,
        title: 'Menu',
        links: [
            {
                id: 0,
                title: 'Home',
                href: '/',
                icon: <IconHome strokeWidth={1.3} size={28} />,
            },
            {
                id: 1,
                title: 'Awards',
                href: '/awards',
                icon: <IconAward strokeWidth={1.3} size={28} />,
            },
            {
                id: 2,
                title: 'Celebrities',
                href: '/Celebrities',
                icon: <IconUser strokeWidth={1.3} size={28} />,
            },
        ],
    },
    {
        id: 1,
        title: 'Library',
        links: [
            {
                id: 0,
                title: 'Recent',
                href: '/home3',
                icon: <IconClock strokeWidth={1.3} size={28} />,
            },
            {
                id: 1,
                title: 'Top Rated',
                href: '/home4',
                icon: <IconStar strokeWidth={1.3} size={28} />,
            },
            {
                id: 2,
                title: 'Downloaded',
                href: '/home5',
                icon: <IconDownload strokeWidth={1.3} size={28} />,
            },
            {
                id: 3,
                title: 'Playlist',
                href: '/home5',
                icon: <IconHeart strokeWidth={1.3} size={28} />,
            },
            {
                id: 4,
                title: 'Watchlist',
                href: '/home6',
                icon: <IconCirclePlus strokeWidth={1.3} size={28} />,
            },
            {
                id: 5,
                title: 'Completed',
                href: '/home8',
                icon: <IconCircleCheck strokeWidth={1.3} size={28} />,
            },
        ],
    },
    {
        id: 2,
        title: 'General',
        links: [
            {
                id: 1,
                title: 'Log Out',
                href: '/home4',
                icon: <IconLogout strokeWidth={1.3} size={28} />,
            },
        ],
    },
]

export default MENU_LINKS
