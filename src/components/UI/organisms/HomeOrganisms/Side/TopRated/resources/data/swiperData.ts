import { type THomeRatedMoviesData } from '..'
import interstellar from '@images/slider/interstellar.jpg'
import loki from '@images/slider/loki-thumbnail.jpg'
import onePiece from '@images/slider/OnePiece.jpg'
import spidermanNowayHome from '@images/slider/spidermanNowayHome.jpg'
import wandaVisionSmall from '@images/slider/wandaVisionSmall.jpg'

const swiperData: THomeRatedMoviesData[] = [
    {
        id: 0,
        title: 'interstellar',
        genre: ['Action', 'Comedy'],
        episode: 4,
        imageSrc: interstellar.src,
    },
    {
        id: 1,
        title: 'loki',
        genre: ['Horror', 'History'],
        episode: 9,
        imageSrc: loki.src,
    },
    {
        id: 2,
        title: 'One Piece',
        genre: ['Comedy', 'War'],
        episode: 55,
        imageSrc: onePiece.src,
    },
    {
        id: 3,
        title: 'Spiderman Noway Home',
        genre: ['Action', 'Comedy', 'History'],
        episode: 55,
        imageSrc: spidermanNowayHome.src,
    },
    {
        id: 4,
        title: 'Wanda Vision Small Wanda Vision Small',
        genre: ['Horror'],
        episode: 55,
        imageSrc: wandaVisionSmall.src,
    },
]

export default swiperData
