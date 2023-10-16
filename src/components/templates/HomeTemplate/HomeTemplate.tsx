'use client'
import { type FC, useState } from 'react'
import { HiOutlineArrowLeftCircle, HiOutlineArrowRightCircle } from 'react-icons/hi2'
import { BaseLayout } from 'src/components/partials/layouts/base'

import { HomeComedySeries } from '@organisms/HomeOrganisms/Main/ComedySeries'
import { HomeMainSlider } from '@organisms/HomeOrganisms/Main/MainSlider'
import { HomeMovieRating } from '@organisms/HomeOrganisms/Main/MovieRating'
import { HomeNowTrending } from '@organisms/HomeOrganisms/Main/NowTrending'
import { HomePopularMoviesOnMova } from '@organisms/HomeOrganisms/Main/PopularMoviesOnMova'
import { HomePopularSeriesOnMova } from '@organisms/HomeOrganisms/Main/PopularSeriesOnMova'
import { HomeRecommendedForYou } from '@organisms/HomeOrganisms/Main/RecommendedForYou'
import { HomeWarMovies } from '@organisms/HomeOrganisms/Main/WarMovies'
import { HomeContinue } from '@organisms/HomeOrganisms/Side/Continue'
import { HomeGenres } from '@organisms/HomeOrganisms/Side/Genres'
import { HomeTopRated } from '@organisms/HomeOrganisms/Side/TopRated'

import { Button } from '@atoms/Button'

const HomeTemplate: FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <BaseLayout>
            {/* <Button className='mb-5'>
                <span>click</span>
            </Button> */}
            <section className={`w-full flex justify-between h-96  gap-x-2 mt-10 pr-3`}>
                <div
                    className={`  h-full flex  flex-col gap-y-6 rounded-2xl  transition-all  duration-700  ${
                        open ? 'w-8/12' : 'w-11/12'
                    }`}
                >
                    <HomeMainSlider />
                    {/* Popular Movies On Mova */}
                    <HomePopularMoviesOnMova />

                    {/* Popular Series On Mova */}
                    <HomePopularSeriesOnMova />

                    {/* Movie Rating */}
                    <HomeMovieRating />

                    {/* Recommended For You */}
                    <HomeRecommendedForYou />

                    {/* Now Trending */}
                    <HomeNowTrending />

                    {/* Comedy Series */}
                    <HomeComedySeries />

                    {/* War Movies */}
                    <HomeWarMovies />
                </div>
                <div
                    className={`   relative flex flex-col h-full whitespace-nowrap rounded-2xl  transition-all  duration-700 ${
                        open ? 'w-4/12 ' : 'w-1/12 '
                    }`}
                >
                    {/* <div
                        className={`w-full flex transition-all  duration-700  ${
                            open ? 'justify-start' : 'justify-center    '
                        }`}
                    >
                        <div onClick={() => setOpen(!open)} className={`cursor-pointer text-4xl  swap swap-rotate`}>
                            <HiOutlineArrowRightCircle className={` ${open ? 'swap-on' : 'swap-off'}   `} />
                            <HiOutlineArrowLeftCircle className={` ${open ? 'swap-off' : 'swap-on'}   `} />
                        </div>
                    </div> */}
                    <div
                        className={`w-full absolute left-1/2  transform  -translate-x-1/2  transition-all  duration-700  ${
                            open ? ' ' : ' '
                        }  z-20`}
                    >
                        <div onClick={() => setOpen(!open)} className={`cursor-pointer text-4xl  swap swap-rotate`}>
                            <HiOutlineArrowRightCircle className={` ${open ? 'swap-on' : 'swap-off'}   `} />
                            <HiOutlineArrowLeftCircle className={` ${open ? 'swap-off' : 'swap-on'}   `} />
                        </div>
                    </div>

                    <div
                        className={`flex pt-12 flex-col transition-all duration-500 ${
                            open ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Continue */}
                        <HomeContinue />

                        {/* Top Rated */}
                        <HomeTopRated />

                        {/* Genres */}
                        <HomeGenres />
                    </div>
                </div>
            </section>
        </BaseLayout>
    )
}

export default HomeTemplate
