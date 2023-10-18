import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from '@mantine/core'
import { BaseLayout } from '@layouts/base'
import { IconChevronLeft, IconPlus } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

import { MovieComments, MovieDetail } from './resources'

const MovieDetailOrganisms: FC = () => {
    return (
        <BaseLayout isSidebar={false}>
            <div className='flex flex-col px-6 mt-6'>
                {/* Back To Home -------> Link */}
                <Link href='/' className='w-fit'>
                    <div className='flex w-fit whitespace-nowrap items-center gap-x-4 text-whiteSecondary hover:text-yellowPrimary'>
                        <div className='bg-grayPrimary p-1.5 bg-opacity-primary rounded-md flex items-center justify-center'>
                            <IconChevronLeft />
                        </div>
                        <span className='text-sm font-semibold'>Back To Home</span>
                    </div>
                </Link>

                <article className='w-full mt-6 flex flex-col items-center gap-6'>
                    {/* Movie Detail & Movie Cover */}
                    <div className='flex flex-col-reverse lg:flex-row gap-x-6'>
                        {/* Movie Detail */}
                        <div className=' flex flex-col gap-y-6'>
                            {/* Movie Name */}
                            <h1 className='text-4xl w-full block font-bold text-white'>The Phantom Menace</h1>

                            {/* Rating -----> Star */}
                            <Rating fractions={2.4} defaultValue={2.4} readOnly size='md' />

                            {/* View Count */}
                            <p className='text-sm font-bold text-graySecondary'>10M+ views</p>

                            <p className='text-sm leading-6 text-graySecondary'>
                                ricks catchphrase Wubba Lubba Dub-Dub was accidentally conceived by series creator
                                Justin Roiland who also voices Rick. While doing a recording, a scene was described in
                                the script where Rick would be spinning around on the floor and yelling Woob woob woob
                                woob woob like Curly from The Three Stooges. Roiland -- who is dyslexic --
                                misinterpreted the line and blurted out Wubba Lubba Dub-Dub. The makers liked Wubba
                                Lubba Dub-Dub so much that it stuck with them. They later decided that it means I am in
                                great pain. Please help me.
                            </p>

                            <div className='w-full   flex justify-start gap-x-4 mt-5'>
                                {/* Add To WatchList Button */}
                                <Button className='h-11  w-fit  px-5 shadow-lg rounded-md bg-grayPrimary bg-opacity-secondary '>
                                    <div className='flex items-center gap-2'>
                                        <IconPlus size={20} />
                                        <span>Watchlist</span>
                                    </div>
                                </Button>

                                {/* Watch Button */}
                                <Button className='  w-full md:w-fit h-11 px-11 shadow-lg font-bold rounded-md bg-yellowPrimary text-black'>
                                    Watch Now
                                </Button>
                            </div>
                        </div>

                        {/* Movie Cover */}
                        <div className='w-full h-[400px] mb-6 lg:mb-0 lg:min-w-[400px] lg:max-w-[300px] lg:max-h-[300px] relative'>
                            <Image
                                src={'https://i.pinimg.com/564x/c2/d2/19/c2d2194249f1540ae22c9d05d5dc2734.jpg'}
                                fill
                                className='object-cover rounded-lg top-1/2 -translate-y-1/2 h-full w-full'
                                alt=''
                            />
                        </div>
                    </div>

                    {/* More Sections */}
                    <section className='w-full grid gap-y-6'>
                        <MovieComments />
                        <MovieDetail />
                    </section>
                </article>
            </div>
        </BaseLayout>
    )
}

export default MovieDetailOrganisms
