'use client'
import { type FC } from 'react'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { IconChevronLeft, IconChevronRight, IconPlayerPlay, IconPlus } from '@tabler/icons-react'

import 'swiper/css/pagination'
import 'swiper/css/pagination'
import 'swiper/css'

import { type IMainSwiperProps, type TSwiperButtonProps } from './resources'

const MainSwiper: FC<IMainSwiperProps> = ({ dataSwiper }) => {
    // Swiper next and prev Action Button
    const SwiperButtons: FC<TSwiperButtonProps> = ({ action }): JSX.Element => {
        const Swiper = useSwiper()
        return (
            <div
                className='flex justify-center items-center text-3xl p-2 rounded-lg bg-opacity-20 bg-gray-500 cursor-pointer'
                onClick={() => (action === 'next' ? Swiper.slideNext() : Swiper.slidePrev())}
            >
                {action === 'next' ? <IconChevronLeft /> : <IconChevronRight />}
            </div>
        )
    }

    return (
        <div className=''>
            <Swiper
                pagination={{ clickable: true, dynamicBullets: true }} // Enable clickable pagination
                modules={[Pagination]}
                spaceBetween={10}
                className='mySwiper h-[320px] rounded-lg '
                loop
            >
                {dataSwiper.map((movie) => {
                    return (
                        <SwiperSlide key={movie.id}>
                            {/* movie Image */}
                            <Image
                                src={movie.imageSrc}
                                alt=''
                                width={300}
                                height={320}
                                className='w-full min-h-full object-cover'
                            />

                            {/* movie Title */}
                            <span className='absolute top-8 left-8 text-xl md:text-3xl font-bold  text-white'>
                                {movie.name}
                            </span>

                            {/* Action Buttons --> 'Watch Now' Button */}
                            <div className='absolute bottom-5 text-white font-bold right-5 z-10'>
                                <div className='p-3 xl:px-8 xl:py-3 flex items-center justify-center cursor-pointer shadow-lg rounded-full xl:rounded-lg bg-yellow-400 '>
                                    <span className='text-dark-950 hidden xl:flex text-black'> Watch Now</span>
                                    <IconPlayerPlay className='flex text-dark-950 text-2xl xl:hidden' />
                                </div>
                            </div>

                            {/* Action Buttons --> 'WatchList' Button */}
                            <div className='absolute bottom-5 text-white font-bold left-5 z-10'>
                                <div
                                    className='p-3 xl:px-8 xl:py-3 flex items-center justify-center gap-x-1.5
                shadow-lg rounded-full xl:rounded-lg bg-gray-400  cursor-pointer bg-opacity-30	'
                                >
                                    <IconPlus className='text-lg ' />
                                    <span className='hidden xl:block'>Watchlist</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

                {/* Custom Next Button */}
                <div className='absolute left-0 pl-5 top-1/2 transform -translate-y-1/2 z-10 text-white'>
                    <SwiperButtons action='next' />
                </div>

                {/* Custom Prev Button */}
                <div className='absolute right-0 pr-5 top-1/2 transform -translate-y-1/2 z-10 text-white'>
                    <SwiperButtons action='prev' />
                </div>
            </Swiper>
        </div>
    )
}

export default MainSwiper
