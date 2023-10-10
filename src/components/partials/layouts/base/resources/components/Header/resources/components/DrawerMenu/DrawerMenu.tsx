'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { headerMenuLinksData } from '../..'

const DrawerMenu = () => {
    const pathname = usePathname()

    return (
        <div className='w-full  flex items-start flex-col mt-8'>
            <span className='text-grayPrimary px-2 mb-2 font-medium text-base '>Categories</span>
            <div className='w-full px-2 flex items-start  flex-col '>
                {headerMenuLinksData.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        className={`w-full ${
                            pathname === link?.href
                                ? 'text-yellowPrimary'
                                : 'hover:text-yellowSecondary text-whiteSecondary'
                        } `}
                    >
                        <div
                            className={`flex border-r-2 ${
                                pathname === link?.href ? 'border-yellowPrimary' : 'border-transparent'
                            } w-full items-center p-2 gap-x-3`}
                        >
                            {/* Link Name */}
                            <p className={`w-full font-normal text-sm`}>{link.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DrawerMenu
