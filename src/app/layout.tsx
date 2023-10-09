import { MantineProvider } from '@providers/mantine'
import { quickSandFonts } from '@utils/fonts/quickSand'

import '@styles/globals.css'

export const metadata = {
    title: 'Mova',
    description: 'Mova - Free Movie And Series For You',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html dir='ltr' lang='en' className={` ${quickSandFonts.variable} bg-black`}>
            <body>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    )
}
