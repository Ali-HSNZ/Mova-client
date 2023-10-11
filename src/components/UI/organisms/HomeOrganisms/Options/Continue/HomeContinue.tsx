'use client'

import { type FC } from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { Button } from '@atoms/Button'
import { Progress } from '@atoms/Progress'

import { dataSwiper, type THomeContinueMovieData } from './resources'

const HomeContinue: FC = () => {
    return (
        <MultiSwiper
            isMoreOption
            seeMoreClassName='pr-6'
            seeMoreLinkHref='#'
            seeMoreLinkTitle='See More'
            title='Continue'
        >
            <>
                {dataSwiper.map((movie: THomeContinueMovieData) => (
                    <SwiperSlide key={movie.id}>
                        <article className='bg-[#16181E] select-none w-[250px] flex flex-col text-whitePrimary p-3   rounded '>
                            {/* Movie Detail */}
                            <div className='flex gap-x-4 '>
                                {/* Movie Image */}
                                <div className='relative w-[64px] h-[80px]'>
                                    <Image
                                        priority
                                        alt={movie.title}
                                        src={movie.imageSrc}
                                        fill
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                        className='h-20 w-16 object-cover rounded-md '
                                    />
                                </div>

                                <div className='flex-grow flex flex-col gap-y-2'>
                                    {/* Movie Title */}
                                    <span className='font-bold text-md truncate text-whiteSecondary'>
                                        {movie.title}
                                    </span>

                                    {/* Movie Episode Left  */}
                                    <span className='text-sm font-medium text-graySecondary'>
                                        {movie.episodeLeft} Episode Left
                                    </span>

                                    {/* Progress bar */}
                                    <Progress className='mt-1' color='#F8B319' size='sm' value={movie.progress} />
                                </div>
                            </div>

                            {/* Action Buttons*/}
                            <div className='flex justify-between gap-x-4 mt-3'>
                                {/* Drop Button */}
                                <Button className='w-fit h-11 shadow-lg rounded-md bg-grayPrimary text-whitePrimary font-semibold'>
                                    Drop
                                </Button>

                                {/* Watch Button */}
                                <Button className='w-full h-11 shadow-lg rounded-md bg-yellowPrimary font-semibold text-black'>
                                    Watch
                                </Button>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </>
        </MultiSwiper>
    )
}

export default HomeContinue
