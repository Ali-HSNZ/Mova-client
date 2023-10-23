'use client'

import React, { type FC } from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { IconPlayerPlay, IconPlus } from '@tabler/icons-react'

import { MainSwiper } from '@molecules/Swipers/MainSwiper'

import { Button } from '@atoms/Button'

import { staticData, type TMainSwiperData } from './resources'
import { type IHomeMainSliderProps } from './resources/types/type'

const HomeMainSlider: FC<IHomeMainSliderProps> = ({ isOpenedSidebar }) => {
    return (
        <MainSwiper>
            <>
                {staticData.map((movie: TMainSwiperData) => {
                    return (
                        <SwiperSlide key={movie.id}>
                            <div className={`${isOpenedSidebar ? 'h-[320px]' : 'h-[450px]'}`}>
                                {/* movie Image */}
                                <Image
                                    src={movie.imageSrc}
                                    alt={movie.title}
                                    loading='lazy'
                                    width={800}
                                    height={200}
                                    className='w-full min-h-full object-cover'
                                />
                                {/* movie Title */}
                                <span className='absolute select-none top-3 left-4 text-xl md:text-3xl font-bold  text-whitePrimary'>
                                    {movie.title}
                                </span>

                                {/* Action Buttons --> 'Watch Now' Button */}
                                <div className='select-none absolute bottom-5  right-4 z-10'>
                                    <Button className='bg-yellowPrimary hover:bg-yellowSecondary duration-secondary text-black  xl:px-8 w-12 h-12 xl:w-auto xl:h-11 flex items-center justify-center cursor-pointer shadow-lg rounded-full xl:rounded-xl  '>
                                        <span className='text-dark-950  hidden xl:flex '>Watch Now</span>
                                        <IconPlayerPlay className='flex xl:hidden' />
                                    </Button>
                                </div>
                                {/* Action Buttons --> 'WatchList' Button */}
                                <div className='select-none absolute bottom-5 left-4 z-10'>
                                    <Button className='bg-grayPrimary text-whiteSecondary xl:px-8 w-12 h-12 xl:w-auto xl:h-11 flex items-center justify-center gap-x-4 shadow-lg rounded-full xl:rounded-xl cursor-pointer bg-opacity-primary hover:bg-opacity-100 duration-secondary	'>
                                        <IconPlus />
                                        <span className='hidden xl:block font-medium'>Watchlist</span>
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </>
        </MainSwiper>
    )
}

export default React.memo(HomeMainSlider)
