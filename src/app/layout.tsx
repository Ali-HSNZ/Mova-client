import { MantineProvider } from '@providers/mantine'
import { iranYekanFont } from '@utils/fonts'

import '@styles/globals.css'

export const metadata = {
    title: 'Mova',
    description: 'Mova - Free Movie And Series For You',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html dir='ltr' lang='en' className={`${iranYekanFont.variable} font-sans bg-black`}>
            <body>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    )
}
