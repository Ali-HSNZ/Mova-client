import { type FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { MovieCard } from '@atoms/MovieCard'

import { sliderData, type THomePopularSeriesOnMovaDetail } from './resources'

const HomePopularSeriesOnMova: FC = () => {
    return (
        <MultiSwiper title='Popular Series On Mova'>
            <>
                {/* Render All Genres */}
                {sliderData.map((movie: THomePopularSeriesOnMovaDetail) => (
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

export default HomePopularSeriesOnMova
