import { type FC } from 'react'

import { MultiKeenSlider } from '@molecules/sliders/MultiKeenSlider'

import { MovieCard } from '@atoms/MovieCard'

import { sliderData, type THomeComedySeriesDetail } from './resources'

const HomeComedySeries: FC = () => {
    return (
        <MultiKeenSlider
            keenSliderOptions={{
                mode: 'free',
                slides: { perView: 'auto', spacing: 25 },
            }}
            title='Comedy Series'
        >
            <>
                {/* Render All Genres */}
                {sliderData.map((movie: THomeComedySeriesDetail) => (
                    <MovieCard
                        key={movie.id}
                        genreList={movie.genre}
                        imageUrl={movie.imageSrc}
                        title={movie.title}
                        rate={movie.rate}
                    />
                ))}
            </>
        </MultiKeenSlider>
    )
}

export default HomeComedySeries
