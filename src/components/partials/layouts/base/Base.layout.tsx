import { type FC } from 'react'

import { Header, type IBaseLayoutProps, Sidebar } from './resources'

const BaseLayout: FC<IBaseLayoutProps> = ({ children, isSidebar = true }) => {
    return (
        <section className='w-full flex justify-center'>
            <div className='w-full max-w-[1700px] flex flex-col text-[#F9F9F9] '>
                <Header />
                <div className='w-full flex'>
                    {isSidebar && (
                        <div className='hidden lg:block  md:px-4'>
                            <Sidebar />
                        </div>
                    )}
                    <section className='flex-grow  overflow-hidden  '>
                        <div className='h-full'>{children}</div>
                    </section>
                </div>
            </div>
        </section>
    )
}
export default BaseLayout
