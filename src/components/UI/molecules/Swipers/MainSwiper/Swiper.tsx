'use client'

import { Navigation, Pagination } from 'swiper/modules'

import { Swiper } from '@atoms/Swiper'

// Swiper Styles
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const MainSwiper = ({ children }: { children: JSX.Element }) => {
    return (
        <Swiper
            pagination={{
                clickable: true, // Enable clickable pagination
                dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            className='_mainSwiper relative h-[320px] rounded-lg'
        >
            {children}
        </Swiper>
    )
}

export default MainSwiper
