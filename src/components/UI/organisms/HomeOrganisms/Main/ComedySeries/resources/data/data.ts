import { type THomeComedySeriesDetail } from '..'

import animationSpiderman from '@public/images/slider/animationSpiderMan.jpg'
import annabel from '@public/images/slider/Annable.jpg'
import avatar from '@public/images/slider/avatar-2009.webp'
import Batman from '@public/images/slider/Batman Be-Leaguered.jpg'
import dayShift from '@public/images/slider/DayShift.jpg'
import enolaHolmes2 from '@public/images/slider/EnolaHolmes2.jpg'

const sliderData: THomeComedySeriesDetail[] = [
    {
        title: 'AnimationSpiderman',
        rate: 2.5,
        imageSrc: animationSpiderman.src,
        genre: ['Action', 'Comedy', 'Action', 'Comedy'],
        detail: 'A young man with spider-like abilities fights crime as a superhero in New York City while trying to have a normal personal life.',
        episode: 4,
        id: 1,
    },
    {
        title: 'Annabel',
        rate: 4.5,
        imageSrc: annabel.src,
        genre: ['Action', 'Comedy'],
        detail: 'Annabelle is a 2014 American supernatural horror film directed by John R. Leonetti, written by Gary Dauberman and produced by Peter Safran and James Wan. It is a prequel to the 2013 film The Conjuring and the second installment in The Conjuring Universe franchise. The film was inspired by a story of a doll named Annabelle told by Ed and Lorraine Warren.[3] The film stars Annabelle Wallis, Ward Horton, and Alfre Woodard.',
        episode: 4,
        id: 2,
    },
    {
        title: 'Avatar',
        rate: 4,
        imageSrc: avatar.src,
        genre: ['Action', 'Comedy'],
        detail: 'Avatar (marketed as James Camerons Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez,[6] and Sigourney Weaver. It is the first installment in the Avatar film series. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.[a] The expansion of the mining colony threatens the continued existence of a local tribe of Navi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Navi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora',
        episode: 4,
        id: 3,
    },
    {
        title: 'DayShift',
        rate: 3.7,
        genre: ['Action', 'Comedy'],
        detail: '',
        episode: 4,
        imageSrc: dayShift.src,
        id: 4,
    },
    {
        title: 'Venome',
        rate: 3.2,
        genre: ['Action', 'Comedy'],
        detail: '',
        episode: 4,
        imageSrc: enolaHolmes2.src,
        id: 5,
    },
    {
        title: 'Batman',
        rate: 2.5,
        imageSrc: Batman.src,
        genre: ['Action', 'Comedy'],
        detail: '',
        episode: 55,
        id: 6,
    },
    {
        title: 'Annabel',
        rate: 4.5,
        imageSrc: annabel.src,
        genre: ['Action', 'Comedy'],
        detail: '',
        episode: 4,
        id: 7,
    },
    {
        title: 'Avatar',
        rate: 4,
        genre: ['Action', 'Comedy'],
        detail: '',
        episode: 4,
        imageSrc: avatar.src,
        id: 8,
    },
    {
        title: 'DayShift',
        rate: 3.7,
        genre: ['Action', 'Comedy'],
        detail: '',
        episode: 4,
        imageSrc: dayShift.src,
        id: 9,
    },
    {
        title: 'Venome',
        rate: 3.2,
        imageSrc: enolaHolmes2.src,
        genre: ['Action', 'Comedy'],
        detail: '',
        episode: 4,
        id: 10,
    },
]
export default sliderData
