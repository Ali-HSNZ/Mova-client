import { type FC } from 'react'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { Button } from '@atoms/Button'
import { Progress } from '@atoms/Progress'

import { sliderData, type THomeContinueMovieData } from './resources'

const HomeContinue: FC = () => {
    return (
        <MultiSwiper isMoreOption seeMoreLinkHref='#' seeMoreLinkTitle='See More' title='Continue'>
            <>
                {sliderData.map((movie: THomeContinueMovieData) => (
                    <SwiperSlide key={movie.id}>
                        <article className=' bg-[#16181E] w-[250px] flex flex-col p-3 rounded-2xl '>
                            {/* Movie Detail */}
                            <div className='flex gap-x-1.5 '>
                                {/* Movie Image */}
                                <div className='relative w-[64px] h-[80px]'>
                                    <Image
                                        loading='lazy'
                                        alt={movie.title}
                                        src={movie.imageSrc}
                                        fill
                                        className='h-[70px] w-14 object-cover rounded-md '
                                    />
                                </div>

                                <div className='flex-grow flex flex-col gap-y-1'>
                                    {/* Movie Title */}
                                    <span className='font-bold text-md truncate text-whiteSecondary'>
                                        {movie.title}
                                    </span>

                                    {/* Movie Episode Left  */}
                                    <span className='text-sm font-medium text-graySecondary'>
                                        {movie.episodeLeft} Episode Left
                                    </span>

                                    {/* Progress bar */}
                                    <Progress
                                        striped
                                        className='mt-1'
                                        color='#F8B319'
                                        size='sm'
                                        value={movie.progress}
                                    />
                                </div>
                            </div>

                            {/* Action Buttons*/}
                            <div className='flex justify-between gap-x-4 '>
                                {/* Drop Button */}
                                <Button className='w-fit h-9 shadow-lg rounded-md bg-grayPrimary duration-secondary hover:bg-opacity-primary bg-opacity-100 text-whitePrimary font-semibold'>
                                    Drop
                                </Button>

                                {/* Watch Button */}
                                <Button className='w-full h-9 shadow-lg rounded-md bg-yellowPrimary hover:bg-yellowSecondary duration-secondary font-bold text-black'>
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
