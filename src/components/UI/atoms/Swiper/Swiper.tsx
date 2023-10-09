'use client'

import { type FC } from 'react'
import { Swiper } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

import { type ICustomSwiperProps } from './resources'

const CustomSwiper: FC<ICustomSwiperProps> = ({
    children,
    modules,
    spaceBetween = 10,
    className = '',
    pagination,
    isLoop,
    ...rest
}) => {
    return (
        <Swiper
            pagination={pagination}
            navigation
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
