import Annable from '@images/slider/Annable.jpg'
import Batman from '@images/slider/Batman Be-Leaguered.jpg'
import DayShift from '@images/slider/DayShift.jpg'
import EnolaHolmes2 from '@images/slider/EnolaHolmes2.jpg'

import { type THomeContinueMovieData } from '../types/type'

const swiperData: THomeContinueMovieData[] = [
    {
        id: 0,
        title: 'Annable',
        episodeLeft: 1,
        imageSrc: Annable.src,
        progress: 40,
    },
    {
        id: 1,
        title: 'Batman',
        episodeLeft: 2,
        imageSrc: Batman.src,
        progress: 20,
    },
    {
        id: 2,
        title: 'DayShift',
        episodeLeft: 0,
        imageSrc: DayShift.src,
        progress: 100,
    },
    {
        id: 3,
        title: 'EnolaHolmes2',
        episodeLeft: 1,
        imageSrc: EnolaHolmes2.src,
        progress: 60,
    },
]

export default swiperData
