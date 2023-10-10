'use client'

import { type FC } from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { IconPlayerPlay, IconPlus } from '@tabler/icons-react'

import { MainSwiper } from '@molecules/Swipers/MainSwiper'

import { Button } from '@atoms/Button'

import { dataSwiper, type TMainSwiperData } from './resources'

const HomeMainSlider: FC = () => {
    return (
        <MainSwiper>
            <>
                {dataSwiper.map((movie: TMainSwiperData) => {
                    return (
                        <SwiperSlide key={movie.id}>
                            {/* movie Image */}
                            <Image
                                src={movie.imageSrc}
                                alt={movie.name}
                                width={800}
                                height={320}
                                className='w-full min-h-full object-cover'
                            />

                            {/* movie Title */}
                            <span className='absolute select-none top-8 left-8 text-xl md:text-3xl font-bold  text-whitePrimary'>
                                {movie.name}
                            </span>

                            {/* Action Buttons --> 'Watch Now' Button */}
                            <div className='select-none absolute bottom-5  right-4 z-10'>
                                <Button className='bg-yellowPrimary text-black p-3 xl:px-8 xl:h-11 flex items-center justify-center cursor-pointer shadow-lg rounded-full xl:rounded-xl  '>
                                    <span className='text-dark-950  hidden xl:flex '>Watch Now</span>
                                    <IconPlayerPlay className='flex xl:hidden' />
                                </Button>
                            </div>

                            {/* Action Buttons --> 'WatchList' Button */}
                            <div className='select-none absolute bottom-5 left-4 z-10'>
                                <Button className='bg-grayPrimary text-whiteSecondary p-3 xl:px-8 xl:h-11 flex items-center justify-center gap-x-1.5 shadow-lg rounded-full xl:rounded-xl cursor-pointer bg-opacity-primary	'>
                                    <IconPlus />
                                    <span className='hidden xl:block font-medium'>Watchlist</span>
                                </Button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </>
        </MainSwiper>
    )
}

export default HomeMainSlider
