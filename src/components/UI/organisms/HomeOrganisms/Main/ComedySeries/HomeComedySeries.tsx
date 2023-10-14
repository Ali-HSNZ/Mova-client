import { type FC } from 'react'
import { IconPlus } from '@tabler/icons-react'

import { MultiKeenSlider } from '@molecules/sliders/MultiKeenSlider'

import { Button } from '@atoms/Button'
import { Rating } from '@atoms/Rating'

import { sliderData, type THomeComedySeriesDetail } from './resources'

const HomeComedySeries: FC = () => {
    return (
        <MultiKeenSlider
            keenSliderOptions={{
                mode: 'free',
                slides: { perView: 'auto', spacing: 25 },
            }}
            title='Comedy Series'
        >
            <>
                {/* Render All Genres */}
                {sliderData.map((movie: THomeComedySeriesDetail) => (
                    <article
                        style={{ minWidth: 220, maxWidth: 220 }}
                        key={movie.id}
                        className='keen-slider__slide h-[250px] rounded-2xl relative overflow-hidden'
                    >
                        <div
                            className='filter brightness-secondary h-full w-full bg-center bg-cover'
                            style={{ backgroundImage: `url('${movie.imageSrc}')` }}
                        ></div>
                        <div className='w-full absolute inset-0 flex flex-col justify-between pt-2 pb-3 px-3   '>
                            <div className='flex flex-col gap-y-1'>
                                <p className='truncate text-xl font-bold text-whiteSecondary drop-shadow-2xl'>
                                    {movie.title}
                                </p>
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
                ))}
            </>
        </MultiKeenSlider>
    )
}

export default HomeComedySeries
