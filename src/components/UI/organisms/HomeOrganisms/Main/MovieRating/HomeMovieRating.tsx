import { IconPlayerPlay } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

import { homeMovieRatingData, type THomeMovieRatingDetail } from './resources'

const HomeMovieRating = () => {
    return (
        <div>
            <h1 className={`font-bold text-xl text-whitePrimary`}>Top Rating Movies</h1>
            <section className='w-full mt-4 grid md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4'>
                {homeMovieRatingData.map((movie: THomeMovieRatingDetail, index: number) => (
                    <div
                        key={movie.id}
                        className='bg-[#121212] border-[5px] border-[#0a0a0a] rounded-lg py-2 px-4 flex justify-between items-center'
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
                        <Button className='rounded-full px-2 h-[42px] border-2 border-[#0a0a0a] bg-[#0d0d0d]'>
                            <IconPlayerPlay className='text-yellowPrimary' />
                        </Button>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default HomeMovieRating
