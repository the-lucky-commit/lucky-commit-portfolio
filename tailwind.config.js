/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-base)',
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
        warm: 'var(--bg-warm)',
        cool: 'var(--bg-cool)',
        primary: 'var(--text-primary)',
        body: 'var(--text-body)',
        muted: 'var(--text-muted)',
        'accent-warm': 'var(--accent-warm)',
        'accent-cool': 'var(--accent-cool)',
        'accent-sage': 'var(--accent-sage)',
        'accent-amber': 'var(--accent-amber)',
        'border-subtle': 'var(--border-subtle)',
        'border-medium': 'var(--border-medium)',
      },
      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        thai: ['var(--font-prompt)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-delayed': 'float-delayed 7s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-1.5deg)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '33%': { transform: 'translateY(-10px)' },
          '66%': { transform: 'translateY(-18px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
