import { type FC } from 'react'

import { MultiKeenSlider } from '@molecules/sliders/MultiKeenSlider'

import { MovieCard } from '@atoms/MovieCard'

import { sliderData, type THomePopularSeriesOnMovaDetail } from './resources'

const HomePopularSeriesOnMova: FC = () => {
    return (
        <MultiKeenSlider
            keenSliderOptions={{
                mode: 'free',
                slides: { perView: 'auto', spacing: 25 },
            }}
            title='Popular Series On Mova'
        >
            <>
                {/* Render All Genres */}
                {sliderData.map((movie: THomePopularSeriesOnMovaDetail) => (
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

export default HomePopularSeriesOnMova
