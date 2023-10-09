type TSwiperButtonProps = {
    action: 'next' | 'prev'
}
type TMainSwiperData = {
    id: number
    name: string
    imageSrc: string
}
interface IMainSwiperProps {
    dataSwiper: TMainSwiperData[]
}

export type { TSwiperButtonProps, IMainSwiperProps, TMainSwiperData }
