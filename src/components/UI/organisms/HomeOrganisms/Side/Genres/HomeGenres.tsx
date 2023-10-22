'use client'

import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { sliderData, type THomeGenreDetail, type THomeGenreMoviesData } from './resources'

const HomeGenres: FC = () => {
    return (
        <MultiSwiper isMoreOption seeMoreLinkHref='#' seeMoreLinkTitle='See More' title='Genres'>
            <>
                {/* Render All Genres */}
                {sliderData.map((category: THomeGenreMoviesData) => (
                    <SwiperSlide key={category.id}>
                        <article className='w-[260px] h-[260px] flex flex-col gap-y-4'>
                            {category.genres.map((genreDetail: THomeGenreDetail) => (
                                <Link
                                    key={genreDetail.id}
                                    href={genreDetail.href}
                                    className='flex w-full h-full relative rounded-2xl overflow-hidden'
                                >
                                    {/* Genre Image */}
                                    <Image
                                        loading='lazy'
                                        alt={genreDetail.title}
                                        src={genreDetail.imageSrc}
                                        fill
                                        className='filter brightness-secondary w-full  bg-cover '
                                    />

                                    {/* Genre Title */}
                                    <div className='absolute left-1/2 top-1/2  w-full transform text-center -translate-x-1/2 -translate-y-1/2 p-2 '>
                                        <span className='text-whiteSecondary text-lg font-semibold'>
                                            {genreDetail.title}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </article>
                    </SwiperSlide>
                ))}
            </>
        </MultiSwiper>
    )
}

export default HomeGenres
