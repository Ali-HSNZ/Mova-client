'use client'

import { type FC } from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { IconPlayerPlay, IconPlus } from '@tabler/icons-react'

import { MainSwiper } from '@molecules/Swipers/MainSwiper'

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
                            <span className='absolute select-none top-8 left-8 text-xl md:text-3xl font-bold  text-white'>
                                {movie.name}
                            </span>

                            {/* Action Buttons --> 'Watch Now' Button */}
                            <div className='select-none absolute bottom-5 text-white  right-5 z-10'>
                                <div className='p-3 xl:px-8 xl:py-3 flex items-center justify-center cursor-pointer shadow-lg rounded-full xl:rounded-lg bg-yellow-400 '>
                                    <span className='text-dark-950 hidden xl:flex text-black font-bold'>Watch Now</span>
                                    <IconPlayerPlay className='flex text-black xl:hidden' />
                                </div>
                            </div>

                            {/* Action Buttons --> 'WatchList' Button */}
                            <div className='select-none absolute bottom-5 text-white  left-5 z-10'>
                                <div className='p-3 xl:px-8 xl:py-3 flex items-center justify-center gap-x-1.5 shadow-lg rounded-full xl:rounded-lg bg-gray-500  cursor-pointer bg-opacity-60	'>
                                    <IconPlus />
                                    <span className='hidden xl:block font-medium'>Watchlist</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </>
        </MainSwiper>
    )
}

export default HomeMainSlider
