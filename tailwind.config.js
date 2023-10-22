/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            brightness: {
                primary: '.70',
                secondary: '.30',
            },
            opacity: {
                secondary: '.4',
                primary: '.7',
                full: '1',
            },
            transitionDuration: {
                primary: '350ms',
                secondary: '200ms',
            },
            colors: {
                // Yellow
                yellowPrimary: '#f8b319',
                yellowSecondary: '#fde68a',

                // Dark
                darkPrimary: '#121212',
                darkSecondary: '#0a0a0a',

                // Gray
                graySecondary: '#94a3b8',
                grayPrimary: '#374151',

                // White
                whitePrimary: '#e2e8f0',
                whiteSecondary: '#d1d5db',

                // Red
                redSecondary: '#f87171',
                redPrimary: '#dc2626',

                // Scroll Color
                scrollColor: '#f8b319', // fill
                scrollHover: '#6b7280', // on hover
            },
            fontFamily: {
                sans: ['var(--font-quickSand)'],
            },
        },
    },
    plugins: [],
}
