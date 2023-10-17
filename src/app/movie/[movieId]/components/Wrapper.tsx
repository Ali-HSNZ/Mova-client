import React, { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import movieNotFoundImg from '@images/base/File-Not-Found-Profile.jpg'
import { IconChevronLeft } from '@tabler/icons-react'
const Wrapper: FC<{
    data?: {
        imageSrc: string
        title: string
        rate: number
        id: number
        genre: string[]
        episode: number
    }
    children: React.ReactNode
}> = ({ data, children }) => {
    return (
        <div className='h-screen relative'>
            <Image
                src={data?.imageSrc || movieNotFoundImg.src}
                fill
                className='object-cover fixed brightness-[.35] '
                alt='movie image'
            />

            <div className='  w-full absolute inset-0 flex justify-center my-24'>
                <div className='w-full container flex flex-col  text-[#F9F9F9] relative '>
                    <div className='h-full flex flex-col items-start'>
                        <Link href='/'>
                            <div className='flex items-center gap-x-4   text-whiteSecondary hover:text-yellowPrimary'>
                                <div className='bg-grayPrimary p-2   transition-all duration-300 bg-opacity-primary rounded-md flex items-center justify-center'>
                                    <IconChevronLeft />
                                </div>
                                <span className='text-sm font-bold text-whiteSecondary'>back to home</span>
                            </div>
                        </Link>
                        <div className='w-full h-full px-10 overflow-y-auto '>
                            <div className='flex flex-col mt-7'>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper
