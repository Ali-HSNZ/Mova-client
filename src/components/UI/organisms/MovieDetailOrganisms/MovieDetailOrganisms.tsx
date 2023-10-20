import { type FC } from 'react'
import Link from 'next/link'
import { BaseLayout } from '@layouts/base'
import { IconChevronLeft } from '@tabler/icons-react'

import { MovieAgents, MovieCasts, MovieComments, MovieDetail, MovieSuggestion } from './resources'

const MovieDetailOrganisms: FC = () => {
    return (
        <BaseLayout isSidebar={false}>
            <div className='flex flex-col px-6 mt-6'>
                {/* Back To Home -------> Link */}
                <Link href='/' className='w-fit'>
                    <div className='flex w-fit whitespace-nowrap items-center gap-x-4 text-whiteSecondary hover:text-yellowPrimary'>
                        <div className='bg-grayPrimary p-1.5 bg-opacity-primary rounded-md flex items-center justify-center'>
                            <IconChevronLeft />
                        </div>
                        <span className='text-sm font-semibold'>Back To Home</span>
                    </div>
                </Link>

                <article className='w-full mt-6 flex flex-col items-center gap-6'>
                    {/* Movie Detail */}
                    <MovieDetail />

                    {/* More Sections */}
                    <section className='w-full grid gap-y-6'>
                        {/* Casts */}
                        <MovieCasts />

                        {/* Agents */}
                        <MovieAgents />

                        {/* Suggestion */}
                        <MovieSuggestion />

                        {/* Comments */}
                        <MovieComments />
                    </section>
                </article>
            </div>
        </BaseLayout>
    )
}

export default MovieDetailOrganisms
