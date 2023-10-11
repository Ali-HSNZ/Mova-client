'use client'

import { type FC } from 'react'
import { Rating } from '@mantine/core'
import { SwiperSlide } from 'swiper/react'
import { IconPlus } from '@tabler/icons-react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { Button } from '@atoms/Button'

import { swiperData, type THomePopularOnMovaDetail } from './resources'

const HomePopularOnMova: FC = () => {
    return (
        <MultiSwiper title='Popular On Mova'>
            <>
                {/* Render All Genres */}
                {swiperData.map((movie: THomePopularOnMovaDetail) => (
                    <SwiperSlide key={movie.id}>
                        <article className='w-[200px] relative overflow-hidden'>
                            <div
                                className='filter brightness-secondary h-[250px] w-full bg-center	   text-white bg-cover  rounded'
                                style={{ backgroundImage: `url('${movie.imageSrc}')` }}
                            ></div>
                            <div className='w-full absolute inset-0 flex flex-col justify-between p-3 rounded-xl   '>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='truncate text-xl font-bold drop-shadow-2xl'>{movie.title}</div>
                                    <Rating fractions={movie.rate} defaultValue={movie.rate} readOnly size='xs' />
                                </div>

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
                                        <Button className='w-fit h-11 shadow-lg rounded-md bg-grayPrimary bg-opacity-secondary'>
                                            <IconPlus size={20} />
                                        </Button>

                                        {/* Watch Button */}
                                        <Button className='w-full h-11 shadow-lg font-bold rounded-md bg-yellowPrimary text-black'>
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

export default HomePopularOnMova
