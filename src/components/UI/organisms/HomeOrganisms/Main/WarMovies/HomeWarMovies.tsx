import { type FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { MovieCard } from '@atoms/MovieCard'

import { STATIC_DATA, type THomeWarMoviesDetail } from './resources'

const HomeWarMovies: FC = () => {
    return (
        <MultiSwiper title='War Movies'>
            <>
                {/* Render All Genres */}
                {STATIC_DATA.map((movie: THomeWarMoviesDetail) => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard
                            genreList={movie.genre}
                            imageUrl={movie.imageSrc}
                            title={movie.title}
                            rate={movie.rate}
                        />
                    </SwiperSlide>
                ))}
            </>
        </MultiSwiper>
    )
}

export default HomeWarMovies
