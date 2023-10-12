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

import { type IMultiSwiperProps } from './resource'

const MultiSwiper: FC<IMultiSwiperProps> = ({
    isMoreOption = undefined,
    children,
    title = '',
    seeMoreLinkHref = '',
    seeMoreLinkTitle = '',
    spaceBetween = 30,
}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef: any = useRef(null)
    const swiper = swiperRef.current?.swiper

    // Saved Swiper Status ---> State
    const [swiperStatus, setSwiperStatus] = useState({
        isBeginning: true,
        isEnd: false,
    })

    // Update Slide Status ---> Handler ---> SetState
    const handleSlideChange = useCallback((swiper: SwiperClass) => {
        setSwiperStatus({
            isBeginning: swiper.isBeginning,
            isEnd: swiper.isEnd,
        })
    }, [])

    // change swiper slide ---> prev
    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return
        swiper.slidePrev()
    }, [swiper])

    // change swiper slide ---> next
    const handleNext = useCallback(() => {
        if (!swiperRef.current) return
        swiper.slideNext()
    }, [swiper])

    // Active button className
    const activeButtonClass = 'text-yellowPrimary'

    // Disable button  className
    const disableButtonClass = 'cursor-default text-graySecondary'

    // Prev Button State  ---> Active | Disable (className)
    const prevButtonClass = swiperStatus.isBeginning ? disableButtonClass : activeButtonClass

    // Next Button State  ---> Active | Disable (className)
    const nextButtonClass = swiperStatus.isEnd ? disableButtonClass : activeButtonClass

    return (
        <div className='relative'>
            <div className={`flex justify-between items-center`}>
                {/* Section Title And Action Buttons */}
                <div className='w-full flex items-center gap-x-2  '>
                    {/* Section Title */}
                    <h1 className={`font-bold ${isMoreOption ? 'w-fit' : 'w-full'} text-xl text-whitePrimary`}>
                        {title}
                    </h1>

                    {/* Prev Button And Next Button */}
                    <div className='flex'>
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
                {isMoreOption && (
                    <Link
                        href={seeMoreLinkHref}
                        className='whitespace-nowrap lg:pr-6 flex items-center text-sm text-graySecondary'
                    >
                        {/* Link Title */}
                        {seeMoreLinkTitle}

                        {/* Chevron Right */}
                        <IconChevronRight size={18} className='mt-[1px]' />
                    </Link>
                )}
            </div>

            <Swiper
                modules={[FreeMode]}
                slidesPerView={'auto'}
                freeMode
                onSlideChange={handleSlideChange}
                spaceBetween={spaceBetween}
                ref={swiperRef}
                className='_multiSwiper mt-4 rounded-lg relative select-none'
            >
                {children}
            </Swiper>
        </div>
    )
}

export default MultiSwiper
