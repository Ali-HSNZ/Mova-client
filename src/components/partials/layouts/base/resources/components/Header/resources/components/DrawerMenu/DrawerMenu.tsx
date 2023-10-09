'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { headerMenuLinksData } from '../..'

const DrawerMenu = () => {
    const pathname = usePathname()

    return (
        <div className='flex items-start flex-col mt-8'>
            <span className='text-gray-400 px-2 mb-2 font-medium text-base '>Categories</span>
            <div className='px-2 flex items-start  flex-col'>
                {headerMenuLinksData.map((link) => (
                    <Link key={link.id} href={link.href}>
                        <div
                            className={`w-full justify-between flex items-center duration-200 ${
                                pathname === link?.href ? 'text-yellow-400' : 'hover:text-yellow-300 text-secondary'
                            } `}
                        >
                            <div
                                className={`flex border-r-2 ${
                                    pathname === link?.href ? 'border-yellow-400' : 'border-transparent'
                                } w-full items-center p-2 gap-x-3`}
                            >
                                {/* Link Name */}
                                <p className={`font-normal text-sm`}>{link.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DrawerMenu
