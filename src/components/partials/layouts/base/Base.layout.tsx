import { type FC } from 'react'

import { type ILayoutProps } from '@coreTypes/layouts'

import { Header } from './resources/components/Header'
import { Sidebar } from './resources/components/Sidebar'

const BaseLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <section className='w-full flex justify-center'>
            <div className='w-full max-w-[1700px] flex flex-col text-[#F9F9F9] '>
                <Header />
                <div className='w-full flex'>
                    <div className='hidden lg:block  md:px-4'>
                        <Sidebar />
                    </div>
                    <main className='flex-grow w-full overflow-hidden mt-6'>{children}</main>
                </div>
            </div>
        </section>
    )
}
export default BaseLayout
