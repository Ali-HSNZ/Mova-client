type THomeTopRatedMovieData = {
    id: number
    title: string
    episodeLeft: number
    progress: number
    imageSrc: string
}
interface IHomeTopRatedMovieDataProps {
    dataSwiper: THomeTopRatedMovieData[]
}

export type { THomeTopRatedMovieData, IHomeTopRatedMovieDataProps }
