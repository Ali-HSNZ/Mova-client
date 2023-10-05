/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-iranyekan)'],
            },
        },
    },
    plugins: [],
}
