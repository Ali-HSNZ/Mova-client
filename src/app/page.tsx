import { BaseLayout } from 'src/components/partials/layouts/base'

export default function Home() {
    return (
        <main>
            <BaseLayout>
                <section className='grid gap-y-6 md:gap-y-0 grid-cols-10 gap-x-10'>
                    <div className='col-span-10 md:col-span-6 xl:col-span-7 md:pl-6'>
                        <div className='w-full bg-green-600 p-4 '>Grid Cols </div>
                    </div>
                    <div className='col-span-10 md:col-span-4 xl:col-span-3 p-4 bg-blue-600'>Grid Cols </div>
                </section>
            </BaseLayout>
        </main>
    )
}
