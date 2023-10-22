'use client'

import { type FC } from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import { IconPlus } from '@tabler/icons-react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { Button } from '@atoms/Button'

import { sliderData, type THomeRatedMoviesData } from './resources'

const HomeTopRated: FC = () => {
    return (
        <MultiSwiper isMoreOption seeMoreLinkHref='#' seeMoreLinkTitle='See More' title='Top Rated'>
            <>
                {sliderData.map((movie: THomeRatedMoviesData) => (
                    <SwiperSlide key={movie.id}>
                        <article className='h-36 w-[280px] rounded-2xl overflow-hidden relative'>
                            {/* Movie Image */}
                            <Image
                                loading='lazy'
                                alt={movie.title}
                                src={movie.imageSrc}
                                fill
                                className='filter brightness-secondary h-full w-full bg-cover'
                            />

                            <div className='absolute inset-0  w-full p-3 flex flex-col justify-between'>
                                {/* Movie Title */}
                                <span className='font-bold text-md text-whiteSecondary truncate'>{movie.title}</span>

                                {/* Action Button And Movie Detail */}
                                <div className='flex flex-col gap-y-2'>
                                    {/* Movie Detail */}
                                    <div className='flex font-semibold justify-between text-graySecondary text-sm  '>
                                        <span className=' whitespace-nowrap pr-4'>{movie.episode} EP</span>
                                        <span className='truncate'>{movie.genre.join(', ')}</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className='flex justify-between gap-x-4 '>
                                        {/* Add To WatchList Button */}
                                        <Button className='w-fit h-9 shadow-lg rounded-md bg-grayPrimary duration-secondary bg-opacity-secondary hover:bg-opacity-100'>
                                            <IconPlus size={20} />
                                        </Button>

                                        {/* Watch Button */}
                                        <Button className='w-full h-9 shadow-lg font-bold rounded-md bg-yellowPrimary hover:bg-yellowSecondary duration-secondary text-black'>
                                            Watch
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </>
        </MultiSwiper>
    )
}

export default HomeTopRated
