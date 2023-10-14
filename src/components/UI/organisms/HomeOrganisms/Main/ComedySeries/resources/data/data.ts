import { type THomeComedySeriesDetail } from '..'

import animationSpiderman from '@public/images/slider/animationSpiderMan.jpg'
import annabel from '@public/images/slider/Annable.jpg'
import avatar from '@public/images/slider/avatar-2009.webp'
import dayShift from '@public/images/slider/DayShift.jpg'
import enolaHolmes2 from '@public/images/slider/EnolaHolmes2.jpg'

const sliderData: THomeComedySeriesDetail[] = [
    {
        title: 'AnimationSpiderman',
        rate: 2.5,
        imageSrc: animationSpiderman.src,
        id: 1,
        genre: ['Action', 'Comedy', 'Action', 'Comedy'],
        episode: 4,
    },
    {
        title: 'Annabel',
        rate: 4.5,
        imageSrc: annabel.src,
        genre: ['Action', 'Comedy'],
        episode: 4,
        id: 2,
    },
    {
        title: 'Avatar',
        rate: 4,
        imageSrc: avatar.src,
        genre: ['Action', 'Comedy'],
        episode: 4,
        id: 3,
    },
    {
        title: 'DayShift',
        rate: 3.7,
        genre: ['Action', 'Comedy'],
        episode: 4,
        imageSrc: dayShift.src,
        id: 4,
    },
    {
        title: 'Venome',
        rate: 3.2,
        genre: ['Action', 'Comedy'],
        episode: 4,
        imageSrc: enolaHolmes2.src,
        id: 5,
    },
    {
        title: 'AnimationSpiderman',
        rate: 2.5,
        imageSrc: animationSpiderman.src,
        genre: ['Action', 'Comedy'],
        episode: 4,
        id: 6,
    },
    {
        title: 'Annabel',
        rate: 4.5,
        imageSrc: annabel.src,
        id: 7,
        genre: ['Action', 'Comedy'],
        episode: 4,
    },
    {
        title: 'Avatar',
        rate: 4,
        genre: ['Action', 'Comedy'],
        episode: 4,
        imageSrc: avatar.src,
        id: 8,
    },
    {
        title: 'DayShift',
        rate: 3.7,
        genre: ['Action', 'Comedy'],
        episode: 4,
        imageSrc: dayShift.src,
        id: 9,
    },
    {
        title: 'Venome',
        rate: 3.2,
        imageSrc: enolaHolmes2.src,
        genre: ['Action', 'Comedy'],
        episode: 4,
        id: 10,
    },
]
export default sliderData
