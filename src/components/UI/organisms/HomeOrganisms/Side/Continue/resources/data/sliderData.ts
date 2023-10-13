import { type THomeContinueMovieData } from '..'
import annable from '@images/slider/Annable.jpg'
import batman from '@images/slider/Batman Be-Leaguered.jpg'
import dayShift from '@images/slider/DayShift.jpg'
import enolaHolmes2 from '@images/slider/EnolaHolmes2.jpg'

const sliderData: THomeContinueMovieData[] = [
    {
        id: 0,
        title: 'Annable',
        episodeLeft: 1,
        imageSrc: annable.src,
        progress: 40,
    },
    {
        id: 1,
        title: 'Batman',
        episodeLeft: 2,
        imageSrc: batman.src,
        progress: 20,
    },
    {
        id: 2,
        title: 'DayShift',
        episodeLeft: 0,
        imageSrc: dayShift.src,
        progress: 100,
    },
    {
        id: 3,
        title: 'EnolaHolmes2',
        episodeLeft: 1,
        imageSrc: enolaHolmes2.src,
        progress: 60,
    },
]

export default sliderData
