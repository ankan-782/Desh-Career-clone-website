/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'mobile-sm': '320px',
            'mobile-md': '375px',
            'mobile-lg': '425px',
            'tablet': '768px',
            'laptop': '1024px',
            'laptop-lg': '1440px',
            '4K': '2560px',
        },
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            container: {
                screens: {
                    '4K': '1440px',
                }
            }
        },
    },
    plugins: [],
}

