'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'

import { MiniSwiper } from '@molecules/Swipers/MiniSwiper'

import { swiperData, type THomeGenreDetail, type THomeGenreMoviesData } from './resources'

const HomeGenres: FC = () => {
    return (
        <section className='overflow-hidden'>
            <MiniSwiper seeMoreLinkHref='#' seeMoreLinkTitle='See More' title='Genres'>
                <>
                    {/* Render All Genres */}
                    {swiperData.map((category: THomeGenreMoviesData) => (
                        <SwiperSlide key={category.id}>
                            <div className='flex flex-col gap-y-4'>
                                {category.genres.map((genreDetail: THomeGenreDetail) => (
                                    <Link
                                        key={genreDetail.id}
                                        href={genreDetail.href}
                                        className='flex w-[250px] cursor-pointer relative'
                                    >
                                        {/* Genre Image */}
                                        <div
                                            className='filter brightness-secondary h-[100px] w-full  text-whitePrimary bg-cover  rounded'
                                            style={{ backgroundImage: `url('${genreDetail.imageSrc}')` }}
                                        ></div>

                                        {/* Genre Title */}
                                        <div className='absolute left-1/2 top-1/2 transform text-center -translate-x-1/2 -translate-y-1/2 w-full p-2 '>
                                            <span className='text-whiteSecondary text-lg font-semibold'>
                                                {genreDetail.title}{' '}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </>
            </MiniSwiper>
        </section>
    )
}

export default HomeGenres
