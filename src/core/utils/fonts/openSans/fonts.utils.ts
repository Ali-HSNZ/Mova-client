import localFont from 'next/font/local'

const openSansFonts = localFont({
    src: [
        {
            path: '../../../../../public/fonts/openSans/OpenSans-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/openSans/OpenSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/openSans/OpenSans-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/openSans/OpenSans-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../../../public/fonts/openSans/OpenSans-ExtraBold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'block',
    variable: '--font-openSans',
})

export default openSansFonts
