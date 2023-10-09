'use client'

import { type FC } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

import { type ICustomSwiperProps } from './resources'

const CustomSwiper: FC<ICustomSwiperProps> = ({
    children,
    modules = [Pagination],
    spaceBetween = 10,
    className = '',
    pagination,
    isLoop,
    ...rest
}) => {
    return (
        <Swiper
            pagination={pagination}
            modules={modules}
            spaceBetween={spaceBetween}
            className={className}
            loop={isLoop || false}
            {...rest}
        >
            {children}
        </Swiper>
    )
}

export default CustomSwiper
