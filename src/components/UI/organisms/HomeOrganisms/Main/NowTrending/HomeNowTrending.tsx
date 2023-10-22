import { type FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { Button } from '@atoms/Button'

import { sliderData, type THomeNowTrendingData } from './resources'

const HomeNowTrending: FC = () => {
    return (
        <MultiSwiper title='Now Trending'>
            <>
                {sliderData.map((movie: THomeNowTrendingData) => (
                    <SwiperSlide key={movie.id}>
                        <article className='h-32 w-[300px] rounded-2xl overflow-hidden relative'>
                            {/* Movie Image */}
                            <div
                                className='filter brightness-secondary h-full w-full bg-center flex flex-col text-whitePrimary bg-cover'
                                style={{ backgroundImage: `url('${movie.imageSrc}')` }}
                            ></div>

                            <div className='absolute inset-0 w-full   flex flex-col justify-end'>
                                {/* Action Button And Movie Detail */}
                                <div className='w-full flex gap-x-4 items-center justify-between px-3 py-2 gap-y-2 bg-grayPrimary  bg-opacity-secondary'>
                                    {/* Movie Detail */}
                                    <p className='truncate'>{movie.title}</p>

                                    {/* Watch Movie Button */}
                                    <Button className='h-9 px-5 text-darkPrimary font-bold border-darkPrimary bg-yellowPrimary hover:bg-yellowSecondary duration-secondary '>
                                        Watch
                                    </Button>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </>
        </MultiSwiper>
    )
}

export default HomeNowTrending
