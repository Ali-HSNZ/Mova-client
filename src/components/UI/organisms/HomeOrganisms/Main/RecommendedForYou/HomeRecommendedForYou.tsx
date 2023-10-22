import { type FC } from 'react'
import Image from 'next/image'
import { IconPlayerPlay, IconPlus } from '@tabler/icons-react'

import { Button } from '@atoms/Button'

const HomeRecommendedForYou: FC = () => {
    return (
        <section className='w-full'>
            <h1 className={`font-bold text-xl text-whitePrimary`}>Recommended For You</h1>
            <div className='h-[400px] mt-4 relative rounded-xl overflow-hidden'>
                <Image
                    alt='annable image'
                    loading='lazy'
                    src={'https://i.pinimg.com/564x/13/9e/c5/139ec5ed56ba222ff4eb34f63d8c9e6b.jpg'}
                    fill
                    className='brightness-secondary object-cover min-w-full h-full w-full'
                />
                <section className='absolute z-10 p-6 gap-y-2 lg:gap-y-3 inset-0 flex justify-end flex-col w-full  items-start'>
                    <div className='flex gap-x-4'>
                        {['Comedy', 'Animation', 'War'].map((genre, index: number) => (
                            <span
                                key={index}
                                className='px-4 py-1.5 text-sm rounded-full bg-grayPrimary bg-opacity-secondary hover:bg-opacity-100 duration-secondary cursor-pointer select-none text-whitePrimary'
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                    <h3 className='text-3xl font-bold'>Black Demon</h3>
                    <p className='w-full lg:w-5/6'>
                        Black Demon: Korea – Joint Economic Area (Korean: 종이의 집: 공동경제구역) is a Korean
                        television series and second series in the Black Demon franchise, based on the original Spanish
                        series. The Korean series directed by Kim Hong-sun and written by Ryu Yong-jae.
                    </p>
                    <div className='flex gap-x-4'>
                        <Button className='w-fit h-11 shadow-lg rounded-md bg-grayPrimary duration-secondary bg-opacity-secondary hover:bg-opacity-100'>
                            <IconPlus size={20} />
                        </Button>
                        <Button className='bg-yellowPrimary hover:bg-yellowSecondary duration-secondary h-11 text-darkPrimary px-6'>
                            <IconPlayerPlay size={18} />
                            <span className='pl-2 font-bold'>Watch</span>
                        </Button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default HomeRecommendedForYou
