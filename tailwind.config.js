// import module from 'module';
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: { max: '640px' },
            // => @media (min-width: 640px) { ... }
            mdsm: '641px',
            // => @media (min-width: 768px) { ... }
            md: '768px',
            // => @media (min-width: 768px) { ... }
            lge: '1023px',
            // => @media (min-width: 1024px) { ... }
            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontSize: {
            sm: '14px',
            tiny: '12px',
            base1: '14px',
            base: '16px',
            h6: '16px',
            h5: '18px',
            h4: '20px',
            h3: '22px',
            h2: '24px',
            h1: '36px',
        },
        fontFamily: {
            Lato: ['Lato'],
            LatoBold: ['LatoBold'],
            Poppins: ['Poppins'],
            PoppinsBold: ['PoppinsBold'],
            PoppinsMedium: ['PoppinsMedium'],
            PoppinsLight: ['PoppinsLight'],
        },
        colors: {
            primary: '#03024E',
            secondary: '#5452EE',
            'secondary-text': '#3C4468',
            text: '#FFA500',
            'text-secondary': '#EC5800',
            'border-color': '#D9D9D9',
            background: '#D2D1EA',
            black: '#000',
            white: '#fff',
            whitetext: '#EDEDF4',
            pureWhite: '#ffffff',
        },
        borderRadius: {
            md: '4px',
            lg: '0.5rem',
            full: '9999px',
        },
        extend: {},
    },
    plugins: [],
};
