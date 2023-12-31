import { type FC } from 'react'

import { Button } from '@atoms/Button'

import { STATIC_DATA, type THomeTopRatingMoviesDetail } from './resources'

const TopRatingMovies: FC = () => {
    return (
        <div>
            <h1 className={`font-bold text-xl text-whitePrimary`}>Top Rating Movies</h1>
            <section className='w-full mt-4 grid md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4'>
                {STATIC_DATA.map((movie: THomeTopRatingMoviesDetail, index: number) => (
                    <div
                        key={movie.id}
                        className='bg-darkPrimary border-[5px] border-darkSecondary rounded-lg py-2 px-4 flex justify-between items-center'
                    >
                        <div className='flex items-center  gap-x-4'>
                            {/* Title */}
                            <span className='text-yellowPrimary font-medium'>{index + 1}</span>

                            {/* Line */}
                            <div className='min-w-[1px] max-w-[1px] h-7 bg-yellowPrimary'></div>

                            {/* Rating */}
                            <div className='flex flex-col gap-y-1'>
                                <p className='text-whitePrimary font-bold'>{movie.title}</p>
                                <div className='flex gap-x-2 text-graySecondary'>
                                    <span>Rating:</span>
                                    <span>{movie.rating}</span>
                                </div>
                            </div>
                        </div>

                        {/* Play Button */}
                        <Button className='rounded-lg px-4 h-9 bg-yellowPrimary hover:bg-yellowSecondary duration-300 font-bold text-darkSecondary'>
                            Watch
                        </Button>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default TopRatingMovies
