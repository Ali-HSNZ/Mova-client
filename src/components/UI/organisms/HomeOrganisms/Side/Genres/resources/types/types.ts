type THomeGenreDetail = {
    id: number
    title: string
    imageSrc: string
    href: string
}
type THomeGenreMoviesData = {
    id: number
    genres: THomeGenreDetail[]
}

export type { THomeGenreDetail, THomeGenreMoviesData }
