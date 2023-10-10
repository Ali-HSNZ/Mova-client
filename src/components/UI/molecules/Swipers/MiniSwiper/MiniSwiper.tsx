'use client'

import { type FC, useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import { FreeMode } from 'swiper/modules'
import { type SwiperClass } from 'swiper/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { Button } from '@atoms/Button'
import { Swiper } from '@atoms/Swiper'

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

    // Active button className
    const activeButtonClass = 'text-yellowPrimary'

    // Disable button  className
    const disableButtonClass = 'cursor-default text-graySecondary'

    // Prev Button State  ---> Active | Disable (className)
    const prevButtonClass = activeIndex === 0 ? disableButtonClass : activeButtonClass

    // Next Button State  ---> Active | Disable (className)
    const nextButtonClass =
        activeIndex === swiperRef.current?.swiper.slides.length - 1 ? disableButtonClass : activeButtonClass

    return (
        <div className='relative'>
            <div className='flex justify-between items-center pr-6'>
                {/* Section Title And Action Buttons */}
                <div className='flex items-center gap-x-2'>
                    {/* Section Title */}
                    <h1 className='font-bold text-xl text-whitePrimary'>{title}</h1>

                    {/* Prev Button And Next Button */}
                    <div>
                        {/* Prev Button */}
                        <Button
                            className={`${prevButtonClass} px-0 transition-all duration-300 bg-transparent`}
                            onClick={handlePrev}
                        >
                            <IconChevronLeft />
                        </Button>
                        {/* Next Button */}
                        <Button
                            className={`${nextButtonClass} px-0 transition-all duration-300 bg-transparent`}
                            onClick={handleNext}
                        >
                            <IconChevronRight />
                        </Button>
                    </div>
                </div>
                {/* Section Link ----> (See More | More Detail | ...) */}
                <Link href={seeMoreLinkHref} className='flex items-center text-sm text-graySecondary'>
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
