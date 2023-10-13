'use client'

import { type FC } from 'react'
import Image from 'next/image'
import { IconPlayerPlay, IconPlus } from '@tabler/icons-react'

import { MainKeenSlider } from '@molecules/sliders/MainKeenSlider'

import { Button } from '@atoms/Button'

import { dataKeenSlider, type TMainKeenSliderData } from './resources'

const HomeMainSlider: FC = () => {
    return (
        <MainKeenSlider>
            <>
                {dataKeenSlider.map((movie: TMainKeenSliderData) => {
                    return (
                        <div key={movie.id} className='keen-slider__slide'>
                            {/* movie Image */}
                            <Image
                                src={movie.imageSrc}
                                alt={movie.title}
                                width={800}
                                height={320}
                                className='w-full min-h-full object-cover'
                            />
                            {/* movie Title */}
                            <span className='absolute select-none top-3 left-4 text-xl md:text-3xl font-bold  text-whitePrimary'>
                                {movie.title}
                            </span>
                            title
                            {/* Action Buttons --> 'Watch Now' Button */}
                            <div className='select-none absolute bottom-5  right-4 z-10'>
                                <Button className='bg-yellowPrimary text-black  xl:px-8 w-12 h-12 xl:w-auto xl:h-11 flex items-center justify-center cursor-pointer shadow-lg rounded-full xl:rounded-xl  '>
                                    <span className='text-dark-950  hidden xl:flex '>Watch Now</span>
                                    <IconPlayerPlay className='flex xl:hidden' />
                                </Button>
                            </div>
                            {/* Action Buttons --> 'WatchList' Button */}
                            <div className='select-none absolute bottom-5 left-4 z-10'>
                                <Button className='bg-grayPrimary text-whiteSecondary xl:px-8 w-12 h-12 xl:w-auto xl:h-11 flex items-center justify-center gap-x-4 shadow-lg rounded-full xl:rounded-xl cursor-pointer bg-opacity-primary	'>
                                    <IconPlus />
                                    <span className='hidden xl:block font-medium'>Watchlist</span>
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </>
        </MainKeenSlider>
    )
}

export default HomeMainSlider
