import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fff5',
          100: '#dcfee6',
          200: '#bafad0',
          300: '#87f2b4',
          400: '#4ae591',
          500: '#19cf73',
          600: '#0ea160',
          700: '#0b7e50',
          800: '#0a6443',
          900: '#074f37'
        },
        accent: {
          50: '#fff8eb',
          100: '#feefcb',
          200: '#fddc95',
          300: '#fbca5c',
          400: '#f7b42a',
          500: '#e49a07',
          600: '#c47d04',
          700: '#995c07',
          800: '#7a480b',
          900: '#633b0d'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        glow: '0 0 0 3px rgba(25, 207, 115, 0.15)',
      }
    }
  },
  plugins: []
}

export default config
