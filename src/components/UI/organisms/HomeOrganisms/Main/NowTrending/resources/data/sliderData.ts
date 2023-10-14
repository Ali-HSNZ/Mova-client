import { type THomeNowTrendingData } from '..'
import avatar from '@images/slider/avatar-2009.webp'
import johnWick from '@images/slider/johnWick.jpg'
import kingsman from '@images/slider/kingsman.jpg'
import orginals from '@images/slider/orginals.webp'
import rikThumbnail from '@images/slider/rik-thumbnail.jpg'
import venom from '@images/slider/venom.webp'

const sliderData: THomeNowTrendingData[] = [
    {
        id: 0,
        title: 'Venom',
        genre: ['Action', 'Comedy'],
        episode: 4,
        imageSrc: venom.src,
    },
    {
        id: 1,
        title: 'Avatar',
        genre: ['Action', 'Comedy'],
        episode: 4,
        imageSrc: avatar.src,
    },
    {
        id: 2,
        title: 'John Wick',
        genre: ['Horror', 'History'],
        episode: 9,
        imageSrc: johnWick.src,
    },
    {
        id: 3,
        title: 'Kings Man',
        genre: ['Comedy', 'War'],
        episode: 55,
        imageSrc: kingsman.src,
    },
    {
        id: 4,
        title: 'Orginals',
        genre: ['Action', 'Comedy', 'History'],
        episode: 55,
        imageSrc: orginals.src,
    },
    {
        id: 5,
        title: 'Rik Thumbnail',
        genre: ['Horror'],
        episode: 55,
        imageSrc: rikThumbnail.src,
    },
]

export default sliderData
