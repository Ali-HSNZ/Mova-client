import { type FC } from 'react'

import { MultiKeenSlider } from '@molecules/sliders/MultiKeenSlider'

import { MovieCard } from '@atoms/MovieCard'

import { sliderData, type THomePopularMoviesOnMovaDetail } from './resources'

const HomePopularMoviesOnMova: FC = () => {
    return (
        <MultiKeenSlider
            keenSliderOptions={{
                mode: 'free',
                slides: { perView: 'auto', spacing: 25 },
            }}
            title='Popular Movies On Mova'
        >
            <>
                {/* Render All Genres */}
                {sliderData.map((movie: THomePopularMoviesOnMovaDetail) => (
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

export default HomePopularMoviesOnMova
