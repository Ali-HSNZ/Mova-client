// 'use client'
// import { type FC, useState } from 'react'
// import { BaseLayout } from 'src/components/partials/layouts/base'
// import { IconChevronLeft, IconChevronRight, IconCircleChevronLeft, IconCircleChevronRight } from '@tabler/icons-react'

// import { HomeComedySeries } from '@organisms/HomeOrganisms/Main/ComedySeries'
// import { HomeMainSlider } from '@organisms/HomeOrganisms/Main/MainSlider'
// import { HomeMovieRating } from '@organisms/HomeOrganisms/Main/MovieRating'
// import { HomeNowTrending } from '@organisms/HomeOrganisms/Main/NowTrending'
// import { HomePopularMoviesOnMova } from '@organisms/HomeOrganisms/Main/PopularMoviesOnMova'
// import { HomePopularSeriesOnMova } from '@organisms/HomeOrganisms/Main/PopularSeriesOnMova'
// import { HomeRecommendedForYou } from '@organisms/HomeOrganisms/Main/RecommendedForYou'
// import { HomeWarMovies } from '@organisms/HomeOrganisms/Main/WarMovies'
// import { HomeContinue } from '@organisms/HomeOrganisms/Side/Continue'
// import { HomeGenres } from '@organisms/HomeOrganisms/Side/Genres'
// import { HomeTopRated } from '@organisms/HomeOrganisms/Side/TopRated'

// import { Button } from '@atoms/Button'

// const HomeTemplate: FC = () => {
//     const [open, setOpen] = useState(false)
//     return (
//         <BaseLayout>
//             {/* <Button className='mb-5'>
//                 <span>click</span>
//             </Button> */}
//             <section className={`w-full flex justify-between h-96  gap-x-2 mt-10 pr-3`}>
//                 <div
//                     className={`  h-full flex  flex-col gap-y-6 rounded-2xl  transition-all  duration-700  ${
//                         open ? 'w-8/12' : 'w-11/12'
//                     }`}
//                 >
//                     <HomeMainSlider />
//                     {/* Popular Movies On Mova */}
//                     <HomePopularMoviesOnMova />

//                     {/* Popular Series On Mova */}
//                     <HomePopularSeriesOnMova />

//                     {/* Movie Rating */}
//                     <HomeMovieRating />

//                     {/* Recommended For You */}
//                     <HomeRecommendedForYou />

//                     {/* Now Trending */}
//                     <HomeNowTrending />

//                     {/* Comedy Series */}
//                     <HomeComedySeries />

//                     {/* War Movies */}
//                     <HomeWarMovies />
//                 </div>
//                 <div
//                     className={` flex flex-col h-full whitespace-nowrap rounded-2xl  transition-all  duration-700 ${
//                         open ? 'w-4/12 ' : 'w-1/12 '
//                     }`}
//                 >
//                     <div
//                         className={`w-full flex justify-between  transition-all duration-500${open ? ' ' : ' '}  z-20`}
//                     >
//                         {/* <div
//                             className='w-full flex justify-center text-xl text-graySecondary cursor-pointer swap swap-rotate'
//                             onClick={() => setOpen(!open)}
//                         >
//                             <div
//                                 className={` flex items-center border-2 border-graySecondary text-graySecondary cursor-pointer rounded-md transition-all duration-500 w-full
//                                 `}
//                             >
//                                 <IconChevronLeft className={` ${open ? 'swap-off' : 'swap-on'}   `} />
//                                 <IconChevronLeft className={` ${open ? 'swap-on' : 'swap-off'}   `} />
//                             </div>
//                         </div> */}
//                         <div
//                             className='w-full flex justify-center text-xl text-graySecondary cursor-pointer swap swap-rotate  border-2 border-graySecondary '
//                             onClick={() => setOpen((prev) => !prev)}
//                         >
//                             <IconChevronLeft className={` ${open ? 'swap-on' : 'swap-off'}`} />
//                             <IconChevronRight className={` ${open ? 'swap-off' : 'swap-on'}`} />
//                         </div>
//                     </div>
//                     <div
//                         className={`flex pt-10 flex-col transition-all duration-500 ${
//                             open ? 'opacity-100' : 'opacity-0'
//                         }`}
//                     >
//                         {/* Continue */}
//                         <HomeContinue />

//                         {/* Top Rated */}
//                         <HomeTopRated />

//                         {/* Genres */}
//                         <HomeGenres />
//                     </div>
//                 </div>
//             </section>
//         </BaseLayout>
//     )
// }

// export default HomeTemplate

'use client'
import { type FC, useState } from 'react'
import { BaseLayout } from 'src/components/partials/layouts/base'
import { IconChevronLeft, IconChevronRight, IconCircleChevronLeft, IconCircleChevronRight } from '@tabler/icons-react'

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

const HomeTemplate: FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <BaseLayout>
            <section className={`w-full flex justify-between  gap-x-2 mt-10 pr-3`}>
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
                    className={` flex flex-col h-full whitespace-nowrap rounded-2xl  transition-all  duration-700 ${
                        open ? 'w-4/12 ' : 'w-1/12 '
                    }`}
                >
                    <div
                        className={`w-full flex justify-between  transition-all duration-500${open ? ' ' : ' '}  z-20`}
                    >
                        <div
                            className='w-full flex justify-center text-xl text-graySecondary'
                            onClick={() => setOpen(!open)}
                        >
                            <div
                                className={`w-full flex items-center border-2 border-graySecondary text-graySecondary cursor-pointer rounded-md transition-all duration-500
                                px-4 py-2  ${open ? 'justify-between' : 'justify-center'}
                                `}
                            >
                                {open ? (
                                    <>
                                        <span className='text-sm font-bold'>collapse</span>
                                        <IconChevronRight size={32} />
                                    </>
                                ) : (
                                    <IconChevronLeft size={32} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div
                        className={`flex pt-10 flex-col transition-all duration-500 ${
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
