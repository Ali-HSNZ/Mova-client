'use client'
import { type FC } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineUser } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdLogout, MdOutlineNotificationsActive } from 'react-icons/md'
import { Popover } from '@mantine/core'
import { Drawer } from '@mantine/core'
import { IconFilter, IconMenu2, IconSearch, IconX } from '@tabler/icons-react'

import { Button } from '@atoms/Button'
import { Input } from '@atoms/Input'

import logoImage from '@public/images/base/logo.jpg'

import { categoriesData } from './resources'
import { Sidebar } from '../Sidebar'

const Header: FC = () => {
    const pathname = usePathname()
    const [opened, setOpened] = useState(false)
    const [drawer, setDrawer] = useState(false)

    return (
        <>
            <div className='flex gap-x-5 md:gap-x-10 w-full  px-4 pt-5'>
                {/* Left */}
                <Button
                    onClick={() => setDrawer(true)}
                    className=' bg-[#21242D] relative p-[24px] rounded-md  block lg:hidden'
                >
                    <IconMenu2
                        size={22}
                        className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                    />
                </Button>

                <div className={`items-center justify-start flex lg:w-[230px]`}>
                    <Image width={40} height={40} src={logoImage.src} alt='logo' />
                </div>

                <div className='grid gap-x-10    sm:grid-cols-8 flex-grow      text-dark-700 '>
                    {/* Center */}
                    <div className='hidden sm:flex col-span-6 md:col-span-6 text-center justify-between items-center '>
                        {/* Menu Link */}
                        <div className='hidden lg:flex items-start gap-x-4'>
                            {categoriesData.map((items) => (
                                <Link key={items.id} href={items.link}>
                                    {/* Link Name */}
                                    <h1
                                        className={`font-normal  border-b-2  px-2 ${
                                            pathname.includes(items?.link)
                                                ? 'text-yellow-400 border-yellow-400'
                                                : 'text-secondary border-transparent'
                                        } `}
                                    >
                                        {items.name}
                                    </h1>
                                </Link>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className='hidden sm:block w-full lg:w-[300px] relative '>
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
                            <IconSearch
                                size={20}
                                className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2.5'
                            />
                            <IconFilter
                                size={20}
                                className='text-gray-400 absolute top-1/2 -translate-y-1/2 right-2.5'
                            />
                        </div>
                    </div>

                    {/* Right */}
                    <div className='sm:col-span-2 flex items-center justify-end xl:justify-between gap-6 text-center  '>
                        {/* Responsive Menu Button */}
                        {/* <div className='p-2 bg-gray-700 text-white rounded-md cursor-pointer block lg:hidden'>
                        <IconMenu2 size={20} className='text-red-400  ' onClick={() => setDrawer(true)} />
                    </div> */}

                        <Button className='   bg-[#21242D] relative p-[24px] rounded-md'>
                            <MdOutlineNotificationsActive
                                size={22}
                                className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
                            />
                        </Button>

                        <span className='hidden xl:block text-yellow-400  font-medium text-lg truncate  '>
                            Ali Hassanzadeh
                        </span>

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
                                <Popover.Dropdown className='bg-[#21242D] border-gray-500 -left-[82px]   text-white'>
                                    <div className='flex flex-col  min-w-[110px] font-medium'>
                                        <div className='text-sm flex gap-x-4 rounded py-4 items-center cursor-pointer px-6 hover:bg-[#1c1f27] justify-between  '>
                                            <span className='text-gray-400'>Profile</span>
                                            <CgProfile className='text-gray-400 ' size={23} />
                                        </div>

                                        <hr className='border-gray-500' />

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

                {/* Search Input */}

                <Drawer
                    opened={drawer}
                    onClose={() => setDrawer(false)}
                    title=' '
                    className='block lg:hidden relative'
                    transitionProps={{ duration: 150, timingFunction: 'linear' }}
                    size='xs'
                    styles={{
                        content: { backgroundColor: '#000000fa' },
                        header: { display: 'none' },
                    }}
                    closeButtonProps={<IconX />}
                >
                    <div className='absolute top-6 right-6 text-3xl text-gray-400'>
                        <IconX onClick={() => setDrawer(false)} />
                    </div>

                    <Sidebar />

                    <div className='flex items-start flex-col mt-12'>
                        <span className='text-gray-400 px-2 mb-2 font-medium text-base '>Categories</span>
                        <div className='px-2 flex items-start  flex-col'>
                            {categoriesData.map((items) => (
                                <Link key={items.id} href={items.link}>
                                    <div className='flex flex-col gap-y-1 p-2' key={items.id}>
                                        <span
                                            className={`font-semibold ${
                                                pathname.includes(items?.link) ? 'text-yellow-400 ' : 'text-primary'
                                            } `}
                                        >
                                            {items.name}
                                        </span>
                                        <div
                                            className={`h-[2.7px] rounded border-0 ${
                                                pathname.includes(items?.link) ? 'bg-yellow-400' : 'bg-transparent '
                                            }`}
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Drawer>
            </div>

            {/* Search Input */}
            <div className='px-4 mt-6'>
                <div className='block sm:hidden w-full relative '>
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
                    <IconSearch size={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2.5' />
                    <IconFilter size={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 right-2.5' />
                </div>
            </div>
        </>
    )
}

export default Header
