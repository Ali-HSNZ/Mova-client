import { type FC } from 'react'
import { BaseLayout } from 'src/components/partials/layouts/base'

import { HomeMainSlider } from '@organisms/HomeOrganisms/Main/MainSlider'
import { HomeMovieRating } from '@organisms/HomeOrganisms/Main/MovieRating'
import { HomePopularMoviesOnMova } from '@organisms/HomeOrganisms/Main/PopularMoviesOnMova'
import { HomePopularSeriesOnMova } from '@organisms/HomeOrganisms/Main/PopularSeriesOnMova'
import { HomeContinue } from '@organisms/HomeOrganisms/Side/Continue'
import { HomeGenres } from '@organisms/HomeOrganisms/Side/Genres'
import { HomeTopRated } from '@organisms/HomeOrganisms/Side/TopRated'

const HomeTemplate: FC = () => {
    return (
        <BaseLayout>
            <section className='grid  gap-y-6 md:gap-y-0 grid-cols-10 gap-x-10'>
                {/* Main ----- (Center)  */}
                <div className='col-span-10 flex flex-col gap-y-6 px-6 xl:px-0 xl:col-span-6 2xl:col-span-7 md:pl-6'>
                    {/* Main Slider */}
                    <HomeMainSlider />

                    {/* Popular Movies On Mova */}
                    <HomePopularMoviesOnMova />

                    {/* Popular Series On Mova */}
                    <HomePopularSeriesOnMova />

                    {/* Movie Rating */}
                    <HomeMovieRating />
                </div>

                {/*  Side  */}
                <div className='xl:sticky xl:top-6  overflow-y-auto xl:h-screen col-span-10 mt-6 px-6 xl:px-0 xl:mt-0 xl:col-span-4 2xl:col-span-3 flex flex-col gap-y-6'>
                    {/* Continue */}
                    <HomeContinue />

                    {/* Top Rated */}
                    <HomeTopRated />

                    {/* Genres */}
                    <HomeGenres />
                </div>
            </section>
        </BaseLayout>
    )
}

export default HomeTemplate
