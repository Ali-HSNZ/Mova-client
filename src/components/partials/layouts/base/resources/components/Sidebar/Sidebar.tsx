'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { type ISidebarProps, MENU_LINKS } from './resources'

const Sidebar: FC<ISidebarProps> = ({ isResponsiveModal }) => {
    const pathname = usePathname()

    // if sidebar rendered in responsive modal, sidebar position in sticky
    const responsiveSidebarClassName = isResponsiveModal ? '' : 'sticky top-0 h-screen'

    return (
        <aside className={`${responsiveSidebarClassName} overflow-y-auto shrink-0 lg:w-[230px]`}>
            <nav className='flex flex-col h-full pt-6 gap-y-8'>
                {/* Map All Links */}
                {MENU_LINKS.map((item) => (
                    <div className='flex flex-col' key={item.id}>
                        {/* Section Name */}
                        <h3 className='text-gray-400 px-2 mb-2 font-medium text-base '>{item.title}</h3>

                        {/* Section Links */}
                        {item.links.map((link) => (
                            <Link key={link.id} href={link.href}>
                                <div
                                    className={`w-full justify-between flex items-center duration-200 ${
                                        pathname === link?.href
                                            ? 'text-yellow-400'
                                            : 'hover:text-yellow-300 text-secondary'
                                    } `}
                                >
                                    <div
                                        className={`flex border-r-2 ${
                                            pathname === link?.href ? 'border-yellow-400' : 'border-transparent'
                                        } w-full items-center p-2 gap-x-3`}
                                    >
                                        {/* icon */}
                                        <div
                                            className={`${
                                                pathname.includes(link?.href)
                                                    ? 'text-yellow-400'
                                                    : 'hover:text-yellow-300 text-secondary'
                                            }}`}
                                        >
                                            {link.icon}
                                        </div>

                                        {/* Link Name */}
                                        <p className={`font-normal text-sm`}>{link.title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
