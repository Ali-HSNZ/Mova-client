import { type FC } from 'react'

import { type ILayoutProps } from '@coreTypes/layouts'

import { Header } from './resources/components/Header'
import { Sidebar } from './resources/components/Sidebar'

const BaseLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div className='max-w-[1500px] mx-auto flex flex-col text-[#F9F9F9] '>

        {/* // <div className='xl:container transition-all duration-300 mx-auto flex flex-col text-[#F9F9F9] '> */}
            <Header />
            <div className='w-full flex md:px-4'>
                <div className='hidden lg:block '>
                    <Sidebar />
                </div>

                <main className='flex-grow w-full overflow-hidden'>{children}</main>
            </div>
        </div>
    )
}
export default BaseLayout
