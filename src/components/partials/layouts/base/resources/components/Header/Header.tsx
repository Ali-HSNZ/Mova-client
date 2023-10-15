'use client'

import { type FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    IconAddressBook, 
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
                    <Button className='absolute p-0 top-6 right-6 text-3xl bg-transparent text-graySecondary'>
                        <IconX onClick={() => setDrawer(false)} />
                    </Button>

                    <Sidebar isResponsiveModal={true} />

                    {/**
                     * Category Links
                     * Menu Links
                     * Movie - Series - Anime - ...
                     */}
                    <DrawerMenu />
                </>
            </Drawer>

            <div id='header'></div>
            <div className='flex gap-x-6 md:gap-x-10 w-full  pt-6 px-6 '>
                {/* Menu Button ---- Showed in Responsive ----  >lg: hidden */}
                <Button
                    onClick={() => setDrawer(true)}
                    className=' bg-grayPrimary relative p-[24px] rounded-md  block lg:hidden'
                >
                    <IconMenu2
                        size={22}
                        className='text-whiteSecondary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
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
                            {/* Render Links */}
                            {headerMenuLinksData.map((link) => (
                                <Link key={link.id} href={link.href}>
                                    {/* Link title */}
                                    <h1
                                        className={`font-normal  border-b-2  px-2 ${
                                            pathname.includes(link.href)
                                                ? 'text-yellowPrimary border-yellowPrimary'
                                                : 'hover:text-yellowSecondary text-whitePrimary border-transparent'
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
                                className='text-grayPrimary absolute top-1/2 -translate-y-1/2 left-2.5'
                            />
                            {/* filter icon */}
                            <IconFilter
                                size={20}
                                className='text-grayPrimary absolute top-1/2 -translate-y-1/2 right-2.5'
                            />
                        </div>
                    </div>

                    {/* Profile */}
                    <div className='sm:col-span-2 flex items-center justify-end xl:justify-between gap-6 text-center'>
                        {/* User Profile Button */}
                        <div className='flex relative'>
                            {/* Popup */}
                            <Popover
                                shadow='sm'
                                position='top'
                                onChange={setOpened}
                                opened={opened}
                                closeOnClickOutside
                            >
                                <Popover.Target>
                                    <Button
                                        onClick={() => setOpened(!opened)}
                                        className=' bg-grayPrimary relative p-[24px] rounded-md'
                                    >
                                        <IconUser
                                            size={22}
                                            className='text-whitePrimary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                                        />
                                    </Button>
                                </Popover.Target>
                                <Popover.Dropdown className='p-0'>
                                    {/* Popup Dropdown */}
                                    <div className='flex flex-col z-50 relative  font-medium'>
                                        {/* Profile Icon */}
                                        <div className='text-sm text-whiteSecondary flex gap-x-4 rounded rounded-b-none py-4 items-center cursor-pointer px-6 transition-all duration-300 hover:bg-gray-800 bg-grayPrimary  justify-between  '>
                                            <span>Profile</span>
                                            <IconAddressBook size={23} />
                                        </div>

                                        {/* Line */}
                                        <hr className='border-whiteSecondary' />

                                        {/* Logout Icon */}
                                        <div className='text-sm flex gap-x-4 rounded rounded-t-none py-4 items-center cursor-pointer transition-all duration-300 hover:bg-gray-800 bg-grayPrimary  px-6 justify-between '>
                                            <span className='text-whiteSecondary'>Log Out</span>
                                            <IconLogout className='text-redSecondary' size={21} />
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                        </div>

                        {/* User Name */}
                        <span className='hidden xl:block text-yellowPrimary font-bold text-lg truncate'>
                            Ali Hassanzadeh
                        </span>

                        {/* Menu Button */}
                        <Button className='bg-grayPrimary relative p-[24px] rounded-md'>
                            <IconMenu2
                                size={22}
                                className='text-whitePrimary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                            />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Search Input in Responsive Mode*/}
            <div className='px-6 mt-6 block sm:hidden'>
                <div className='w-full relative '>
                    <Input
                        className='w-[270px] text-red-500'
                        width={300}
                        placeholder='Search'
                        type='search'
                        radius={8}
                        styles={{
                            input: {
                                background: ' #21242D',
                                border: '0',
                                color: '#d1d5db',
                                fontSize: '15px',
                                padding: '25px 40px 25px 40px',
                            },
                        }}
                    />
                    <IconSearch size={20} className='text-grayPrimary absolute top-1/2 -translate-y-1/2 left-2.5' />
                    <IconFilter size={20} className='text-grayPrimary absolute top-1/2 -translate-y-1/2 right-2.5' />
                </div>
            </div>
        </>
    )
}

export default Header
