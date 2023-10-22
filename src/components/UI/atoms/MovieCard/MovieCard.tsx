import { type FC } from 'react'
import Link from 'next/link'
import { Button, Rating } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

import { type IMovieCardProps } from './resources'

const MovieCard: FC<IMovieCardProps> = ({ genreList = [], imageUrl = '', rate = 0, episode, title = '' }) => {
    return (
        <article style={{ minWidth: 220, maxWidth: 220 }} className='h-[250px] rounded-2xl relative overflow-hidden'>
            <div
                className='filter brightness-secondary h-full w-full bg-center bg-cover'
                style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>
            <div className='w-full absolute inset-0 flex flex-col justify-between pt-2 pb-3 px-3   '>
                <div className='flex flex-col gap-y-1'>
                    <p className='truncate text-xl font-bold text-whiteSecondary drop-shadow-2xl'>{title}</p>
                    <Rating fractions={rate} defaultValue={rate} readOnly size='xs' />
                </div>

                {/* Action Button And Movie Detail */}
                <div className='flex flex-col gap-y-2'>
                    {/* Movie Detail */}
                    <div className='flex font-semibold justify-between text-graySecondary text-sm  '>
                        {episode && <span className=' whitespace-nowrap pr-4'>{episode} EP</span>}
                        <span className='truncate'>{genreList.join(', ')}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex justify-between gap-x-4 '>
                        {/* Add To WatchList Button */}
                        <Button className='w-fit h-11 shadow-lg rounded-md bg-grayPrimary bg-opacity-secondary hover:bg-opacity-100 duration-secondary'>
                            <IconPlus size={20} />
                        </Button>

                        {/* Watch Button */}
                        <Link
                            href={'/movie/id'}
                            className='w-full flex text-sm justify-center items-center shadow-lg font-bold rounded-md bg-yellowPrimary hover:bg-yellowSecondary duration-secondary text-black'
                        >
                            Watch
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default MovieCard
