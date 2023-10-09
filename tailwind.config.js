/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                yellowPrimary: '#FACC15',
                yellowSecondary: '#FDE047',
                primary: '#fff',
                secondary: '#fff',
            },
            fontFamily: {
                sans: ['var(--font-openSans)'],
            },
        },
    },
    plugins: [],
}
