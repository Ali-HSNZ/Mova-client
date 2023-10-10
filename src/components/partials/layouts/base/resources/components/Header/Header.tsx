'use client'

import { type FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    IconAddressBook,
    IconBell,
    IconFilter,
    IconLogout,
    IconMenu2,
    IconSearch,
    IconUser,
    IconX,
} from '@tabler/icons-react'

import { Button } from '@atoms/Button'
import { Drawer } from '@atoms/Drawer'
import { Input } from '@atoms/Input'
import { Popover } from '@atoms/Popover'

import logoImage from '@public/images/base/logo.jpg'

import { DrawerMenu, headerMenuLinksData } from './resources'
import { Sidebar } from '../Sidebar'

const Header: FC = () => {
    const pathname = usePathname()

    const [opened, setOpened] = useState(false)
    const [drawer, setDrawer] = useState(false)

    return (
        <>
            {/**
             * Menu Modal --- In Responsive Mode
             * After Clicked on Menu Button --> This Modal Showed
             */}
            <Drawer opened={drawer} onClose={() => setDrawer(false)} className='block lg:hidden relative'>
                <>
                    <div className='absolute top-6 right-6 text-3xl text-gray-400'>
                        <IconX onClick={() => setDrawer(false)} />
                    </div>

                    <Sidebar isResponsiveModal={true} />

                    {/**
                     * Category Links
                     * Menu Links
                     * Movie - Series - Anime - ...
                     */}
                    <DrawerMenu />
                </>
            </Drawer>

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
                            <IconBell
                                size={22}
                                className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                            />
                        </Button>

                        {/* User Name */}
                        <span className='hidden xl:block text-yellow-500 font-bold text-lg truncate'>
                            Ali Hassanzadeh
                        </span>

                        {/* User Profile Button */}
                        <div className='flex relative'>
                            <Button
                                className=' bg-[#21242D] relative p-[24px] rounded-md'
                                onClick={() => setOpened((o) => !o)}
                            >
                                <IconUser
                                    size={22}
                                    className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                                />
                            </Button>

                            {/* Popup */}
                            <Popover
                                opened={opened}
                                dropdownClassName='bg-[#21242D] border-gray-500 -left-[82px] text-white'
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
                                <div className='flex flex-col  min-w-[110px] font-medium'>
                                    {/* Profile Icon */}
                                    <div className='text-sm flex gap-x-4 rounded py-4 items-center cursor-pointer px-6 hover:bg-[#1c1f27] justify-between  '>
                                        <span className='text-gray-400'>Profile</span>
                                        <IconAddressBook className='text-gray-400 ' size={23} />
                                    </div>

                                    {/* Line */}
                                    <hr className='border-gray-500' />

                                    {/* Logout Icon */}
                                    <div className='text-sm flex gap-x-4 rounded py-4 items-center cursor-pointer hover:bg-[#1c1f27] px-6 justify-between '>
                                        <span className='text-gray-400'>Log Out</span>
                                        <IconLogout className='text-red-400 ' size={21} />
                                    </div>
                                </div>
                            </Popover>
                        </div>
                    </div>
                </div>
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
