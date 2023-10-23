import { type FC } from 'react'
import { SwiperSlide } from 'swiper/react'

import { MultiSwiper } from '@molecules/Swipers/MultiSwiper'

import { MovieCard } from '@atoms/MovieCard'

import { SLIDER_DATA, type THomeComedySeriesDetail } from './resources'

const HomeComedySeries: FC = () => {
    return (
        <MultiSwiper title='Comedy Series'>
            <>
                {/* Render All Genres */}
                {SLIDER_DATA.map((movie: THomeComedySeriesDetail) => (
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

export default HomeComedySeries
