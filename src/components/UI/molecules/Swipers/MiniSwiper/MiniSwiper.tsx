'use client'

import { type FC, useCallback, useRef } from 'react'
import Link from 'next/link'
import { FreeMode } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

// Swiper Styles ---> Navigation
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

import { type IMiniSwiperProps } from './resource'

const MiniSwiper: FC<IMiniSwiperProps> = ({ children, title = '', seeMoreLinkHref = '', seeMoreLinkTitle = '' }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef: any = useRef(null)

    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return
        swiperRef.current.swiper.slidePrev()
    }, [])

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return
        swiperRef.current.swiper.slideNext()
    }, [])

    return (
        <div className='relative'>
            {/* next slider */}

            <div className='flex justify-between items-center pr-6'>
                <div className='flex items-center gap-x-2'>
                    <h1 className='font-bold text-xl text-gray-200'>{title}</h1>
                    <div>
                        <Button
                            className='px-0 text-gray-400 hover:text-yellow-400 transition-all duration-300 bg-transparent'
                            onClick={handlePrev}
                        >
                            <IconChevronLeft />
                        </Button>
                        <Button
                            className='px-0 text-gray-400 hover:text-yellow-400 transition-all duration-300 bg-transparent'
                            onClick={handleNext}
                        >
                            <IconChevronRight />
                        </Button>
                    </div>
                </div>
                <Link href={seeMoreLinkHref} className=' text-sm text-gray-400'>
                    {seeMoreLinkTitle}
                </Link>
            </div>

            <Swiper
                modules={[FreeMode]}
                slidesPerView={'auto'}
                freeMode
                spaceBetween={30}
                ref={swiperRef}
                className='_miniSwiper mt-4 rounded-lg relative select-none'
            >
                {children}
            </Swiper>
        </div>
    )
}

export default MiniSwiper
