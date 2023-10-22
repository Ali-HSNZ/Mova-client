import { type FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { MovieCard } from '@atoms/MovieCard'

import { sliderData, type THomePopularMoviesOnMovaDetail } from './resources'

const HomePopularMoviesOnMova: FC = () => {
    return (
        <MultiSwiper title='Popular Movies On Mova'>
            <>
                {/* Render All Genres */}
                {sliderData.map((movie: THomePopularMoviesOnMovaDetail) => (
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

export default HomePopularMoviesOnMova
