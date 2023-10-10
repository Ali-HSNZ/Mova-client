/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            brightness: {
                10: '.10',
                20: '.20',
                30: '.30',
                40: '.40',
            },
            colors: {
                yellowPrimary: '#FACC15',
                yellowSecondary: '#FDE047',
                primary: '#fff',
                secondary: '#fff',
            },
            fontFamily: {
                sans: ['var(--font-quickSand)'],
            },
        },
    },
    plugins: [],
}
