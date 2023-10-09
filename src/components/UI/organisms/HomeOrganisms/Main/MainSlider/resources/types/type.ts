type TMainSwiperData = {
    id: number
    name: string
    imageSrc: string
}
interface IMainSwiperProps {
    dataSwiper: TMainSwiperData[]
}

export type { IMainSwiperProps, TMainSwiperData }
