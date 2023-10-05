import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      mainColor: '#1877F2',
    },

    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },

    container: {
      center: true,
    },

    extend: {
      screens: {
        xs: {
          max: '575px',
        },
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
});
