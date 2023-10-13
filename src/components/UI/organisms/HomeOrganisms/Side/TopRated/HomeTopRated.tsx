'use client'

import { type FC } from 'react'
import { IconPlus } from '@tabler/icons-react'

import { MultiKeenSlider } from '@molecules/sliders/MultiKeenSlider'

import { Button } from '@atoms/Button'

import { sliderData, type THomeRatedMoviesData } from './resources'

const HomeTopRated: FC = () => {
    return (
        <MultiKeenSlider
            keenSliderOptions={{
                slides: {
                    spacing: 30,
                    perView: 'auto',
                },
                mode: 'free-snap',
            }}
            isMoreOption
            seeMoreLinkHref='#'
            seeMoreLinkTitle='See More'
            title='Top Rated'
        >
            <>
                {sliderData.map((movie: THomeRatedMoviesData) => (
                    <article
                        key={movie.id}
                        style={{ minWidth: 260, maxWidth: 260 }}
                        className='keen-slider__slide h-32 rounded-2xl relative'
                    >
                        {/* Movie Image */}
                        <div
                            className='filter brightness-secondary h-full w-full bg-center flex flex-col text-whitePrimary bg-cover'
                            style={{ backgroundImage: `url('${movie.imageSrc}')` }}
                        ></div>

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
                                    <Button className='w-fit h-9 shadow-lg rounded-md bg-grayPrimary bg-opacity-secondary'>
                                        <IconPlus size={20} />
                                    </Button>

                                    {/* Watch Button */}
                                    <Button className='w-full h-9 shadow-lg font-bold rounded-md bg-yellowPrimary text-black'>
                                        Watch
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </>
        </MultiKeenSlider>
    )
}

export default HomeTopRated
