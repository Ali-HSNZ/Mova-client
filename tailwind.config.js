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
            colors: {
                // Yellow
                yellowPrimary: '#FACC15',
                yellowSecondary: '#fde68a',

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
                scrollColor: '#FACC15', // fill
                scrollHover: '#6b7280', // on hover
            },
            fontFamily: {
                sans: ['var(--font-quickSand)'],
            },
        },
    },
    plugins: [],
}
