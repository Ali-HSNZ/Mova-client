'use client'

import { Navigation, Pagination } from 'swiper/modules'

import { Swiper } from '@atoms/Swiper'

const MainSwiper = ({ children }: { children: JSX.Element }) => {
    return (
        <Swiper
            pagination={{ clickable: true, dynamicBullets: true }} // Enable clickable pagination
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            className='_swiper relative h-[320px] rounded-lg'
            isLoop
        >
            {children}
        </Swiper>
    )
}

export default MainSwiper
