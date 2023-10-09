'use client'
import { type FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineUser } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdLogout, MdOutlineNotificationsActive } from 'react-icons/md'
import { Popover } from '@mantine/core'
import { IconFilter, IconMenu2, IconSearch, IconX } from '@tabler/icons-react'

import { Button } from '@atoms/Button'
import { Drawer } from '@atoms/Drawer'
import { Input } from '@atoms/Input'

import logoImage from '@public/images/base/logo.jpg'

import { headerMenuLinksData } from './resources'
import { Sidebar } from '../Sidebar'

const Header: FC = () => {
    const pathname = usePathname()
    const [opened, setOpened] = useState(false)
    const [drawer, setDrawer] = useState(false)

    return (
        <>
            <div className='flex gap-x-6 md:gap-x-10 w-full  pt-6 px-6 '>
                {/* Menu Button ---- Showed in Responsive ----  >lg: hidden */}
                <Button
                    onClick={() => setDrawer(true)}
                    className=' bg-[#21242D] relative p-[24px] rounded-md  block lg:hidden'
                >
                    <IconMenu2
                        size={22}
                        className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                    />
                </Button>

                {/* Mova Logo Image */}
                <div className={`items-center justify-start flex lg:w-[230px]`}>
                    <Image width={40} height={40} src={logoImage.src} alt='Mova Logo' />
                </div>

                {/* Parent Sections - Search Input And Menu Links Sections  And Profile Section */}
                <div className='grid gap-x-10 sm:grid-cols-8 flex-grow'>
                    {/* Search Input Section And Menu Links Section */}
                    <div className='hidden sm:flex col-span-6 md:col-span-6 text-center justify-between items-center '>
                        {/* Menu Links Section */}
                        <div className='hidden lg:flex items-start gap-x-4'>
                            {/* Map Links */}
                            {headerMenuLinksData.map((link) => (
                                <Link key={link.id} href={link.href}>
                                    {/* Link title */}
                                    <h1
                                        className={`font-normal  border-b-2  px-2 ${
                                            pathname.includes(link.href)
                                                ? 'text-yellow-400 border-yellow-400'
                                                : 'text-secondary border-transparent'
                                        } `}
                                    >
                                        {link.title}
                                    </h1>
                                </Link>
                            ))}
                        </div>

                        {/* Search Input Section */}
                        <div className='hidden sm:block w-full lg:w-[300px] relative '>
                            {/* Search Input Field */}
                            <Input
                                className='w-[270px]'
                                width={300}
                                placeholder='Search'
                                radius={8}
                                styles={{
                                    input: {
                                        background: ' #21242D',
                                        border: '0',
                                        color: 'white',
                                        fontSize: '15px',
                                        padding: '25px 40px 25px 40px',
                                    },
                                }}
                            />
                            {/* Search icon */}
                            <IconSearch
                                size={20}
                                className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2.5'
                            />
                            {/* filter icon */}
                            <IconFilter
                                size={20}
                                className='text-gray-400 absolute top-1/2 -translate-y-1/2 right-2.5'
                            />
                        </div>
                    </div>

                    {/* Profile */}
                    <div className='sm:col-span-2 flex items-center justify-end xl:justify-between gap-6 text-center'>
                        {/* Notification Button */}
                        <Button className='bg-[#21242D] relative p-[24px] rounded-md'>
                            <MdOutlineNotificationsActive
                                size={22}
                                className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                            />
                        </Button>

                        {/* User Name */}
                        <span className='hidden xl:block text-yellow-400 font-medium text-lg truncate'>
                            Ali Hassanzadeh
                        </span>

                        {/* User Profile Button */}
                        <div className='flex relative'>
                            <Button
                                className=' bg-[#21242D] relative p-[24px] rounded-md'
                                onClick={() => setOpened((o) => !o)}
                            >
                                <AiOutlineUser
                                    size={22}
                                    className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                                />
                            </Button>

                            {/* Popup */}
                            <Popover
                                opened={opened}
                                position='bottom'
                                withArrow
                                styles={{
                                    arrow: {
                                        right: '18%',
                                        transform: 'translate(50%, 0)',
                                        border: '1px solid #495057',
                                    },
                                    dropdown: {
                                        padding: 0,
                                        transform: 'translate(0, 50%)',
                                    },
                                }}
                            >
                                {/* Popup Dropdown */}
                                <Popover.Dropdown className='bg-[#21242D] border-gray-500 -left-[82px]   text-white'>
                                    <div className='flex flex-col  min-w-[110px] font-medium'>
                                        {/* Profile Icon */}
                                        <div className='text-sm flex gap-x-4 rounded py-4 items-center cursor-pointer px-6 hover:bg-[#1c1f27] justify-between  '>
                                            <span className='text-gray-400'>Profile</span>
                                            <CgProfile className='text-gray-400 ' size={23} />
                                        </div>

                                        {/* Line */}
                                        <hr className='border-gray-500' />

                                        {/* Logout Icon */}
                                        <div className='text-sm flex gap-x-4 rounded py-4 items-center cursor-pointer hover:bg-[#1c1f27] px-6 justify-between '>
                                            <span className='text-gray-400'>Log Out</span>
                                            <MdLogout className='text-red-400 ' size={21} />
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                        </div>
                    </div>
                </div>
                <Drawer
                    opened={drawer}
                    onClose={() => setDrawer(false)}
                    className='block lg:hidden relative'
                    transitionProps={{ duration: 150, timingFunction: 'linear' }}
                    styles={{
                        content: { backgroundColor: '#000000fa' },
                        header: { display: 'none' },
                    }}
                >
                    <>
                        <div className='absolute top-6 right-6 text-3xl text-gray-400'>
                            <IconX onClick={() => setDrawer(false)} />
                        </div>

                        <Sidebar isResponsiveModal={true} />

                        <div className='flex items-start flex-col mt-8'>
                            <span className='text-gray-400 px-2 mb-2 font-medium text-base '>Categories</span>
                            <div className='px-2 flex items-start  flex-col'>
                                {headerMenuLinksData.map((link) => (
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
                                                {/* Link Name */}
                                                <p className={`font-normal text-sm`}>{link.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                </Drawer>
            </div>

            {/* Search Input in Responsive Mode*/}
            <div className='px-6 mt-6 block sm:hidden'>
                <div className='w-full relative '>
                    <Input
                        className='w-[270px]'
                        width={300}
                        placeholder='Search'
                        type='search'
                        radius={8}
                        styles={{
                            input: {
                                background: ' #21242D',
                                border: '0',
                                color: 'white',
                                fontSize: '15px',
                                padding: '25px 40px 25px 40px',
                            },
                        }}
                    />
                    <IconSearch size={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2.5' />
                    <IconFilter size={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 right-2.5' />
                </div>
            </div>
        </>
    )
}

export default Header
