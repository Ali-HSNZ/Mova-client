// Import necessary dependencies
import React, { forwardRef } from 'react'
import { Swiper, type SwiperClass, type SwiperProps } from 'swiper/react'

import 'swiper/css'

type TSwiper = SwiperClass & SwiperProps
// Define your CustomSwiper component
const CustomSwiper = forwardRef<TSwiper, SwiperProps>(({ children, className = '', ...rest }, ref) => {
    return (
        <Swiper ref={ref} className={className} {...rest}>
            {children}
        </Swiper>
    )
})

CustomSwiper.displayName = 'Swiper'

export default CustomSwiper
