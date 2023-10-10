'use client'

import { type FC, useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { FreeMode } from 'swiper/modules'
import { Swiper, type SwiperClass } from 'swiper/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

import 'swiper/css/navigation'
import 'swiper/css/free-mode'

import { type IMiniSwiperProps } from './resource'

const MiniSwiper: FC<IMiniSwiperProps> = ({ children, title = '', seeMoreLinkHref = '', seeMoreLinkTitle = '' }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef: any = useRef(null)

    // Saved Swiper Slide Index ---> State
    const [activeIndex, setActiveIndex] = useState(0)

    // Update Slide Index ---> Handler ---> SetState
    const handleSlideChange = useCallback((swiper: SwiperClass) => {
        setActiveIndex(swiper.activeIndex)
    }, [])

    // change swiper slide ---> prev
    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return
        swiperRef.current.swiper.slidePrev()
    }, [])

    // change swiper slide ---> next
    const handleNext = useCallback(() => {
        if (!swiperRef.current) return
        swiperRef.current.swiper.slideNext()
    }, [])

    // active button ---> className
    const activeButtonClass = 'px-0 text-yellow-400 transition-all duration-300 bg-transparent'

    // prev button ----> className
    const inactiveButtonClass = 'cursor-default px-0 text-gray-400 transition-all duration-300 bg-transparent'

    // Prev Button State  ---> Active | Inactive (className)
    const prevButtonClass = activeIndex === 0 ? inactiveButtonClass : activeButtonClass

    // Next Button State  ---> Active | Inactive (className)
    const nextButtonClass =
        activeIndex === swiperRef.current?.swiper.slides.length - 1 ? inactiveButtonClass : activeButtonClass

    return (
        <div className='relative'>
            <div className='flex justify-between items-center pr-6'>
                {/* Section Title And Action Buttons */}
                <div className='flex items-center gap-x-2'>
                    {/* Section Title */}
                    <h1 className='font-bold text-xl text-gray-200'>{title}</h1>

                    {/* Prev Button And Next Button */}
                    <div>
                        {/* Prev Button */}
                        <Button className={prevButtonClass} onClick={handlePrev}>
                            <IconChevronLeft />
                        </Button>
                        {/* Next Button */}
                        <Button className={nextButtonClass} onClick={handleNext}>
                            <IconChevronRight />
                        </Button>
                    </div>
                </div>
                {/* Section Link ----> (See More | More Detail | ...) */}
                <Link href={seeMoreLinkHref} className='flex items-center text-sm text-gray-300'>
                    {/* Link Title */}
                    {seeMoreLinkTitle}

                    {/* Chevron Right */}
                    <IconChevronRight size={18} className='mt-[1px]' />
                </Link>
            </div>

            <Swiper
                modules={[FreeMode]}
                slidesPerView={'auto'}
                freeMode
                onSlideChange={handleSlideChange}
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
