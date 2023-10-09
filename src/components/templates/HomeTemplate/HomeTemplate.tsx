import { type FC } from 'react'
import { BaseLayout } from 'src/components/partials/layouts/base'

import { HomeMainSlider } from '@organisms/HomeOrganisms/Main/MainSlider'
import { HomeContinue } from '@organisms/HomeOrganisms/Options/Continue'

const HomeTemplate: FC = () => {
    return (
        <BaseLayout>
            <section className='grid gap-y-6 md:gap-y-0 grid-cols-10 gap-x-10'>
                <div className='col-span-10 px-6 lg:px-0 lg:col-span-6 xl:col-span-7 md:pl-6'>
                    <HomeMainSlider />
                </div>
                <div className='col-span-10 lg:col-span-4 xl:col-span-3'>
                    <HomeContinue />
                </div>
            </section>
        </BaseLayout>
    )
}

export default HomeTemplate
