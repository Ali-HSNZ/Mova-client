'use client'

import { type FC } from 'react'
import { Swiper } from 'swiper/react'
import { type SwiperOptions } from 'swiper/types'

import 'swiper/css'

import { type ICustomSwiperOptions } from './resources'

const CustomSwiper: FC<ICustomSwiperOptions & SwiperOptions> = ({
    children,
    spaceBetween = 10,
    className = '',
    ...rest
}) => {
    return (
        <Swiper navigation spaceBetween={spaceBetween} className={className} {...rest}>
            {children}
        </Swiper>
    )
}

export default CustomSwiper
