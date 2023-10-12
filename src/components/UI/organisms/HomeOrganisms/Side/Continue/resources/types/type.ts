type THomeContinueMovieData = {
    id: number
    title: string
    episodeLeft: number
    progress: number
    imageSrc: string
}
interface IHomeContinueMovieDataProps {
    dataSwiper: THomeContinueMovieData[]
}

export type { THomeContinueMovieData, IHomeContinueMovieDataProps }
