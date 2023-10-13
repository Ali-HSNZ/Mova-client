import { type THomeGenreMoviesData } from '..'
import dayShift from '@images/slider/DayShift.jpg'
import enolaHolmes2 from '@images/slider/EnolaHolmes2.jpg'
import interstellar from '@images/slider/interstellar.jpg'
import loki from '@images/slider/loki-thumbnail.jpg'
import nobody from '@images/slider/nobody.jpg'
import onePiece from '@images/slider/OnePiece.jpg'
import spidermanNowayHome from '@images/slider/spidermanNowayHome.jpg'
import wandaVisionSmall from '@images/slider/wandaVisionSmall.jpg'

const sliderData: THomeGenreMoviesData[] = [
    {
        id: 0,
        genres: [
            {
                id: 0,
                title: 'Scary',
                imageSrc: loki.src,
                href: '#',
            },
            {
                id: 1,
                title: 'Action',
                imageSrc: dayShift.src,
                href: '#',
            },
        ],
    },
    {
        id: 1,
        genres: [
            {
                id: 0,
                title: 'Animation',
                imageSrc: spidermanNowayHome.src,
                href: '#',
            },
            {
                id: 1,
                title: 'Science Fiction',
                imageSrc: interstellar.src,
                href: '#',
            },
        ],
    },
    {
        id: 2,
        genres: [
            {
                id: 0,
                title: 'Adventure',
                imageSrc: enolaHolmes2.src,
                href: '#',
            },
            {
                id: 1,
                title: 'Comedy',
                imageSrc: nobody.src,
                href: '#',
            },
        ],
    },
    {
        id: 3,
        genres: [
            {
                id: 0,
                title: 'Scary',
                imageSrc: onePiece.src,
                href: '#',
            },
            {
                id: 1,
                title: 'Science Fiction',
                imageSrc: wandaVisionSmall.src,
                href: '#',
            },
        ],
    },
]

export default sliderData
