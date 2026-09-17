export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2E6B',
          900: '#071F49',
          800: '#0A2E6B',
          700: '#0F3A84',
          600: '#14459B',
        },
        primary: {
          DEFAULT: '#0D6EFD',
          600: '#0D6EFD',
          700: '#0B5ED7',
          50: '#EFF6FF',
          100: '#DBEAFE',
        },
        success: '#198754',
        danger: '#DC3545',
        warn: '#FFC107',
        gold: '#FFD700',
        canvas: '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)',
        panel: '0 4px 14px rgba(16, 24, 40, 0.06)',
      },
    },
  },
  plugins: [],
}
