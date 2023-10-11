import { type TMainSwiperData } from '..'

import animationSpiderman from '@public/images/slider/animationSpiderMan.jpg'
import annabel from '@public/images/slider/Annable.jpg'
import avatar from '@public/images/slider/avatar-2009.webp'
import dayShift from '@public/images/slider/DayShift.jpg'
import enolaHolmes2 from '@public/images/slider/EnolaHolmes2.jpg'

const dataSwiper: TMainSwiperData[] = [
    {
        id: 0,
        name: 'Annabel',
        imageSrc: annabel.src,
    },
    {
        id: 1,
        name: 'Animation Spiderman',
        imageSrc: animationSpiderman.src,
    },
    {
        id: 2,
        name: 'Avatar',
        imageSrc: avatar.src,
    },
    {
        id: 3,
        name: 'DayShift',
        imageSrc: dayShift.src,
    },
    {
        id: 4,
        name: 'Enola Holmes 2',
        imageSrc: enolaHolmes2.src,
    },
    {
        id: 5,
        name: 'Avatar',
        imageSrc: avatar.src,
    },
]

export default dataSwiper
