'use client'

import { type FC, useState } from 'react'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import { IconChevronRight } from '@tabler/icons-react'

import 'keen-slider/keen-slider.min.css'

import { type IMultiKeenSliderProps, MultiKeenSliderArrowLeft, MultiKeenSliderArrowRight } from './resources'

const MultiKeenSlider: FC<IMultiKeenSliderProps> = ({
    seeMoreLinkHref = '',
    seeMoreLinkTitle = '',
    isMoreOption = false,
    children,
    keenSliderOptions,
    title = '',
}) => {
    // Current Slide Index
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    // is Loaded Slider
    const [loaded, setLoaded] = useState<boolean>(false)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        ...keenSliderOptions,
        renderMode: 'performance',
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <article className='relative'>
            <div className={`flex justify-between items-center`}>
                {/* Section Title And Action Buttons */}
                <div className='w-full flex items-center gap-x-2'>
                    {/* Section Title */}
                    <h1 className={`font-bold ${isMoreOption ? 'w-fit' : 'w-full'} text-xl text-whitePrimary`}>
                        {title}
                    </h1>

                    {/* Prev Button And Next Button */}
                    {loaded && instanceRef.current && (
                        <div className='flex'>
                            {/* Arrow Left */}
                            <MultiKeenSliderArrowLeft
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                                disabled={currentSlide === 0}
                            />

                            {/* Arrow Right */}
                            <MultiKeenSliderArrowRight
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                                disabled={currentSlide === instanceRef.current.track.details.maxIdx}
                            />
                        </div>
                    )}
                </div>

                {/* Section Link ----> (See More | More Detail | ...) */}
                {isMoreOption && (
                    <Link
                        href={seeMoreLinkHref}
                        className='whitespace-nowrap select-none lg:pr-6 flex items-center text-sm text-graySecondary'
                    >
                        {/* Link Title */}
                        {seeMoreLinkTitle}

                        {/* Chevron Right */}
                        <IconChevronRight size={18} className='mt-[1px]' />
                    </Link>
                )}
            </div>

            {/* Keen Slider Children */}
            <div ref={sliderRef} className='keen-slider mt-4 rounded-lg'>
                {children}
            </div>
        </article>
    )
}

export default MultiKeenSlider
