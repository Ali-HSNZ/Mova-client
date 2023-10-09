import { type PaginationOptions, type SwiperModule } from 'swiper/types'

interface ICustomSwiperProps {
    children: JSX.Element
    modules?: SwiperModule[]
    spaceBetween?: number
    className?: string
    pagination: PaginationOptions
    isLoop?: boolean
}
export default ICustomSwiperProps
