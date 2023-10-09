import { type TMainSwiperData } from '@molecules/Swipers/MainSwiper/resources'

import AnimationSpiderman from '@public/images/slider/animationSpiderMan.jpg'
import Annabel from '@public/images/slider/Annable.jpg'
import Avatar from '@public/images/slider/avatar-2009.webp'
import DayShift from '@public/images/slider/DayShift.jpg'
import EnolaHolmes2 from '@public/images/slider/EnolaHolmes2.jpg'

const dataSwiper: TMainSwiperData[] = [
    {
        id: 0,
        name: 'Animation Spiderman',
        imageSrc: AnimationSpiderman.src,
    },
    {
        id: 1,
        name: 'Avatar',
        imageSrc: Avatar.src,
    },
    {
        id: 2,
        name: 'DayShift',
        imageSrc: DayShift.src,
    },
    {
        id: 3,
        name: 'Enola Holmes 2',
        imageSrc: EnolaHolmes2.src,
    },
    {
        id: 4,
        name: 'Avatar',
        imageSrc: Avatar.src,
    },
    {
        id: 5,
        name: 'Annabel',
        imageSrc: Annabel.src,
    },
]

export default dataSwiper
