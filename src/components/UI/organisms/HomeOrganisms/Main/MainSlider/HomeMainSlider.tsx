import { type FC } from 'react'

import { MainSwiper } from '@molecules/Swipers/MainSwiper'

import { dataSwiper } from './resources'

const HomeMainSlider: FC = () => {
    return <MainSwiper dataSwiper={dataSwiper} />
}

export default HomeMainSlider
