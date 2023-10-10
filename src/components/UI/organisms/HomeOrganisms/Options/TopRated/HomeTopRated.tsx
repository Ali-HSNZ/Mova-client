'use client'

import { type FC } from 'react'
import Image from 'next/image'
import { Progress } from '@mantine/core'
import { SwiperSlide } from 'swiper/react'

import MiniSwiper from '@molecules/Swipers/MiniSwiper/MiniSwiper'

import { Button } from '@atoms/Button'

import { dataSwiper, type THomeTopRatedMovieData } from './resources'

const HomeTopRated: FC = () => {
    return (
        <section className=' overflow-hidden'>
            <MiniSwiper seeMoreLinkHref='#' seeMoreLinkTitle='See More' title='Top Rated'>
                <>
                    {dataSwiper.map((movie: THomeTopRatedMovieData) => (
                        <SwiperSlide key={movie.id}>
                            <article className='bg-[#16181E] select-none w-[250px] flex flex-col text-white p-2   rounded '>
                                <div className='flex gap-x-2 '>
                                    <Image
                                        alt={movie.title}
                                        src={movie.imageSrc}
                                        width={60}
                                        height={200}
                                        className='h-20 w-16 object-cover rounded-md '
                                    />
                                    <div className='flex-grow flex flex-col gap-y-2'>
                                        <span className='font-bold text-md'>{movie.title}</span>
                                        <span className='text-sm font-medium text-gray-400'>
                                            {movie.episodeLeft} Episode Left
                                        </span>

                                        <Progress color='#F8B319' size='sm' value={movie.progress} />
                                    </div>
                                </div>
                                <div className='flex justify-between gap-x-4 mt-5'>
                                    <Button className='w-fit h-11 shadow-lg rounded-md bg-gray-700'>Drop</Button>
                                    <Button className='w-full h-11 shadow-lg rounded-md bg-yellow-400 text-black'>
                                        Watch
                                    </Button>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </>
            </MiniSwiper>
        </section>
    )
}

export default HomeTopRated
