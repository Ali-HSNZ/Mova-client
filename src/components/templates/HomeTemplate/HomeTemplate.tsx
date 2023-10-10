import { type FC } from 'react'
import { BaseLayout } from 'src/components/partials/layouts/base'

import { HomeMainSlider } from '@organisms/HomeOrganisms/Main/MainSlider'
import { HomeContinue } from '@organisms/HomeOrganisms/Options/Continue'
import { HomeGenres } from '@organisms/HomeOrganisms/Options/Genres'
import { HomeTopRated } from '@organisms/HomeOrganisms/Options/TopRated'

const HomeTemplate: FC = () => {
    return (
        <BaseLayout>
            <section className='grid gap-y-6 md:gap-y-0 grid-cols-10 gap-x-10'>
                {/* Main ----- (Center)  */}
                <div className='col-span-10 px-6 lg:px-0 lg:col-span-6 xl:col-span-7 md:pl-6'>
                    <HomeMainSlider />
                </div>

                {/* User Options ------- (Side) */}
                <div className='col-span-10 mt-6 px-6 lg:px-0 lg:mt-0 lg:col-span-4 xl:col-span-3 flex flex-col gap-y-6'>
                    {/* Continue */}
                    <HomeContinue />

                    {/* Top Rated */}
                    <HomeTopRated />

                    {/* Genres */}
                    <HomeGenres />
                </div>
            </section>
        </BaseLayout>
    )
}

export default HomeTemplate
