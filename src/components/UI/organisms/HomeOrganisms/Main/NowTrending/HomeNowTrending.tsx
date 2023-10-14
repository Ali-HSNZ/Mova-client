'use client'

import { type FC } from 'react'

import { MultiKeenSlider } from '@molecules/sliders/MultiKeenSlider'

import { Button } from '@atoms/Button'

import { sliderData, type THomeNowTrendingData } from './resources'

const HomeNowTrending: FC = () => {
    return (
        <MultiKeenSlider
            keenSliderOptions={{
                slides: {
                    spacing: 30,
                    perView: 'auto',
                },
                mode: 'free',
            }}
            title='Top Rated'
        >
            <>
                {sliderData.map((movie: THomeNowTrendingData) => (
                    <article
                        key={movie.id}
                        style={{ minWidth: 300, maxWidth: 300 }}
                        className='keen-slider__slide h-32 rounded-2xl relative'
                    >
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
                                <Button className='h-9 px-4 bg-darkPrimary font-normal border-darkPrimary text-yellowPrimary  '>
                                    Watch
                                </Button>
                            </div>
                        </div>
                    </article>
                ))}
            </>
        </MultiKeenSlider>
    )
}

export default HomeNowTrending
