'use client'
import React, { type FC } from 'react'
import Image from 'next/image'
import { Button, Rating } from '@mantine/core'
import imbdImg from '@images/base/imbd.png'
import { IconPlus } from '@tabler/icons-react'

import { sliderData } from '@organisms/HomeOrganisms/Main/ComedySeries/resources'

import Wrapper from './components/Wrapper'
const MovieDetail: FC<{ params: { movieId: string } }> = ({ params }) => {
    /* MovieDetail = {params.movieId} */
    const dataDetail = sliderData.find((items) => items.id === +params.movieId)

    if (dataDetail) {
        return (
            <Wrapper data={dataDetail}>
                <div className='w-full grid items-center grid-cols-3 gap-x-5  '>
                    <div className='col-span-2 '>
                        <div className='flex flex-col gap-y-2'>
                            <span className='text-4xl font-bold'>{dataDetail.title}</span>
                            <Rating fractions={dataDetail.rate} defaultValue={dataDetail.rate} readOnly size='md' />
                            <span className='text-sm font-bold'>10M+ views</span>
                            <Image src={imbdImg.src} width={60} height={60} />

                            <span className='text-sm'>{dataDetail?.detail}</span>

                            <div className='w-full flex justify-start gap-x-4 mt-5'>
                                {/* Add To WatchList Button */}
                                <Button className='h-11  px-5 shadow-lg rounded-md bg-grayPrimary bg-opacity-secondary '>
                                    <div className='flex items-center gap-2'>
                                        <IconPlus size={20} />
                                        <span>Watchlist</span>
                                    </div>
                                </Button>

                                {/* Watch Button */}
                                <Button className='  h-11 px-11 shadow-lg font-bold rounded-md bg-yellowPrimary text-black'>
                                    Watch Now
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 rounded-xl overflow-hidden flex items-center justify-center'>
                        <img src={dataDetail.imageSrc} className='object-cover h-full  w-full' alt='' />
                    </div>
                </div>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <div className='flex items-center gap-x-1'>
                    <span className='text-sm font-bold text-red-400'>Movie Detail Not Found </span>
                    <span className='text-red-500'>:</span>
                    <span className='text-red-600'>)</span>
                </div>
            </Wrapper>
        )
    }
}

export default MovieDetail
