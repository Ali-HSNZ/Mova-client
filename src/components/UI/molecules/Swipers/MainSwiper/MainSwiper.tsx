import { useCallback, useRef, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { type SwiperClass } from 'swiper/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import { Button } from '@atoms/Button'
import { Swiper } from '@atoms/Swiper'

// Swiper Styles
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const MainSwiper = ({ children }: { children: JSX.Element }) => {
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
    const activeButtonClass = 'text-whitePrimary bg-opacity-primary'

    // Disable button className
    const disableButtonClass = 'cursor-default text-grayPrimary bg-opacity-secondary'

    // Prev Button State  ---> Active | Disable (className)
    const prevButtonClass = activeIndex === 0 ? disableButtonClass : activeButtonClass

    // Next Button State  ---> Active | Disable (className)
    const nextButtonClass =
        activeIndex === swiperRef.current?.swiper.slides.length - 1 ? disableButtonClass : activeButtonClass

    return (
        <div className='relative'>
            {/* Prev Button */}
            <div className='absolute top-1/2 left-4 -translate-y-1/2 z-10'>
                <Button
                    className={`${prevButtonClass} px-2 transition-all duration-300 bg-grayPrimary rounded-xl`}
                    onClick={handlePrev}
                >
                    <IconChevronLeft />
                </Button>
            </div>

            {/* Next Button */}
            <div className='absolute top-1/2 -translate-y-1/2 right-4 z-10'>
                <Button
                    className={`${nextButtonClass} px-2 transition-all duration-300 bg-grayPrimary rounded-xl`}
                    onClick={handleNext}
                >
                    <IconChevronRight />
                </Button>
            </div>

            {/* Swiper */}
            <Swiper
                pagination={{
                    clickable: true, // Enable clickable pagination 
                }}
                onSlideChange={handleSlideChange}
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                ref={swiperRef}
                className='_mainSwiper relative h-[320px] rounded-lg'
            >
                {children}
            </Swiper>
        </div>
    )
}

export default MainSwiper
