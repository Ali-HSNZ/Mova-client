'use client'

import { type FC, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import { Button } from '@atoms/Button'

import 'keen-slider/keen-slider.min.css'

import { type IMainKeenSliderProps, MainKeenSliderArrowLeft, MainKeenSliderArrowRight } from './resources'

const MainKeenSlider: FC<IMainKeenSliderProps> = ({ children }) => {
    // Current Slide Index
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    // is Loaded Slider
    const [loaded, setLoaded] = useState<boolean>(false)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        dragSpeed: 1,
        initial: 0,
        slides: {
            perView: 1,
            spacing: 16,
        },
        renderMode: 'performance',
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <article className='relative '>
            {/* Keen Slider Children */}
            <div ref={sliderRef} className='keen-slider h-[320px] rounded-lg w-full'>
                {children}
            </div>

            {/* Render Arrows ------> Right | Left ----->> JSX Element */}
            {loaded && instanceRef.current && (
                <>
                    {/* Arrow Left */}
                    <MainKeenSliderArrowLeft
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                        disabled={currentSlide === 0}
                    />

                    {/* Arrow Right */}
                    <MainKeenSliderArrowRight
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                        disabled={currentSlide === instanceRef.current.track.details.maxIdx}
                    />
                </>
            )}

            {/* Render Bullets -------->> JSX Element*/}
            {loaded && instanceRef.current && (
                <div className='absolute bottom-[28px] -translate-x-1/2 left-1/2 flex gap-x-3 px-3 py-2 w-fit bg-grayPrimary bg-opacity-primary rounded-lg '>
                    {/* Render Bullet ----->  number of available slides */}
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((index: number) => {
                        const isCurrentIndex: boolean = currentSlide === index

                        // Render Bullet Button
                        return (
                            <Button
                                key={index}
                                className={`p-0 rounded-full w-2.5 h-2.5  ${
                                    isCurrentIndex ? 'bg-yellowPrimary' : 'bg-whitePrimary'
                                }`}
                                // on click handler
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(index)
                                }}
                            ></Button>
                        )
                    })}
                </div>
            )}
        </article>
    )
}

export default MainKeenSlider
