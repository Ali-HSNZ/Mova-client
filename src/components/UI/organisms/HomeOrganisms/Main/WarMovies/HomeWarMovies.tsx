import { type FC } from 'react'

import { MultiKeenSlider } from '@molecules/sliders/MultiKeenSlider'

import { MovieCard } from '@atoms/MovieCard'

import { sliderData, type THomeWarMoviesDetail } from './resources'

const HomeWarMovies: FC = () => {
    return (
        <MultiKeenSlider
            keenSliderOptions={{
                mode: 'free',
                slides: { perView: 'auto', spacing: 25 },
            }}
            title='War Movies'
        >
            <>
                {/* Render All Genres */}
                {sliderData.map((movie: THomeWarMoviesDetail) => (
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

export default HomeWarMovies
