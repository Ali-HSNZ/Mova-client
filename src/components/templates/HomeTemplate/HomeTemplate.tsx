import { type FC, useState } from 'react'
import { BaseLayout } from 'src/components/partials/layouts/base'

import { HomeComedySeries } from '@organisms/HomeOrganisms/Main/ComedySeries'
import { HomeMainSlider } from '@organisms/HomeOrganisms/Main/MainSlider'
import { HomeNowTrending } from '@organisms/HomeOrganisms/Main/NowTrending'
import { HomePopularMoviesOnMova } from '@organisms/HomeOrganisms/Main/PopularMoviesOnMova'
import { HomePopularSeriesOnMova } from '@organisms/HomeOrganisms/Main/PopularSeriesOnMova'
import { HomeRecommendedForYou } from '@organisms/HomeOrganisms/Main/RecommendedForYou'
import { TopRatingMovies } from '@organisms/HomeOrganisms/Main/TopRatingMovies'
import { HomeWarMovies } from '@organisms/HomeOrganisms/Main/WarMovies'
import { HomeContinue } from '@organisms/HomeOrganisms/Side/Continue'
import { HomeGenres } from '@organisms/HomeOrganisms/Side/Genres'
import { HomeTopRated } from '@organisms/HomeOrganisms/Side/TopRated'

import { Button } from '@atoms/Button'

const HomeTemplate: FC = () => {
    const [isOpenedSidebar, setIsOpenedSidebar] = useState<boolean>(true)

    return (
        <BaseLayout>
            <section className='grid  relative gap-y-6 md:gap-y-0 grid-cols-10 '>
                <Button
                    className='bg-yellowPrimary absolute top-5 left-5 z-50'
                    onClick={() => setIsOpenedSidebar(!isOpenedSidebar)}
                >
                    Open Sidebar ---- {isOpenedSidebar ? 'True' : 'False'}
                </Button>
                {/* Main ----- (Center)  */}
                <div
                    className={`  col-span-10 transition-all  duration-500 ${
                        isOpenedSidebar ? 'pr-6 xl:col-span-6 2xl:col-span-7  ' : ''
                    } flex flex-col gap-y-6 px-6 md:pl-6`}
                >
                    {/* Main Slider */}
                    <HomeMainSlider isOpenedSidebar={isOpenedSidebar} />

                    {/* Popular Movies On Mova */}
                    <HomePopularMoviesOnMova />

                    {/* Popular Series On Mova */}
                    <HomePopularSeriesOnMova />

                    {/* Top Rating Movies */}
                    <TopRatingMovies />

                    {/* Recommended For You */}
                    <HomeRecommendedForYou />

                    {/* Now Trending */}
                    <HomeNowTrending />

                    {/* Comedy Series */}
                    <HomeComedySeries />

                    {/* War Movies */}
                    <HomeWarMovies />
                </div>
                {/*  Side  */}
                <div
                    className={` transition-all mt-6 duration-500  flex flex-col gap-y-6 px-6
                        ${
                            isOpenedSidebar
                                ? ' col-span-10  xl:px-0 xl:mt-0 xl:col-span-4 2xl:col-span-3  xl:sticky xl:top-6 xl:h-screen'
                                : ' col-span-10  '
                        }
                    `}
                >
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
