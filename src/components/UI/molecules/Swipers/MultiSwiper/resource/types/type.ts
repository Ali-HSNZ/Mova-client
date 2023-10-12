import { type SwiperOptions } from 'swiper/types'

interface IMultiSwiperProps {
    children: JSX.Element
    title: string
    seeMoreLinkHref?: string
    seeMoreLinkTitle?: string
    isMoreOption?: boolean
    spaceBetween?: number
    swiperOption?: SwiperOptions
}
export default IMultiSwiperProps
