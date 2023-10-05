import localFont from 'next/font/local'

const iranYekanFonts = localFont({
    src: [
        {
            path: '../../../../public/fonts/ttf/IRANYekanWebThin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/ttf/IRANYekanWebLight.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/ttf/IRANYekanWebRegular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/ttf/IRANYekanWebMedium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/ttf/IRANYekanWebBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/ttf/IRANYekanWebExtraBold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/ttf/IRANYekanWebBlack.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/ttf/IRANYekanWebExtraBlack.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    display: 'block',
    variable: '--font-iranyekan',
})

export default iranYekanFonts
