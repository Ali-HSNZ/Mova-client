export type THomeRatedMoviesData = {
    id: number
    title: string
    genre: string[]
    episode: number
    imageSrc: string
}
export interface IHomeRatedMoviesDataProps {
    dataSwiper: THomeRatedMoviesData[]
}
