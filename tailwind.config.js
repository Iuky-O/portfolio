/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        jacarta:    '#3A1F30',
        queenpink:  '#FFCCE0',
        midpurple:  '#E883B5',
        oldlav:     '#7A3D5E',
        darkbg:     '#100810',
        surface:    '#1A0D16',
        surfacealt: '#221020',
        neon:       '#FF5DA8',
        neondim:    '#D44A88',
        accent:     '#C47EC8',
        accentsoft: '#9B4BA0',
        textprimary:'#FFCCE0',
        textsecond: '#D4A0BC',
        textmuted:  '#8A5A72',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(ellipse at center, #E883B540 0%, transparent 70%)',
        'hero-mesh':   'radial-gradient(at 20% 50%, #3A1F3088 0%, transparent 50%), radial-gradient(at 80% 20%, #E883B550 0%, transparent 50%), radial-gradient(at 60% 80%, #7A3D5E44 0%, transparent 50%)',
      },
      animation: {
        'float':     'float 6s ease-in-out infinite',
        'glow-pulse':'glow-pulse 3s ease-in-out infinite',
        'shimmer':   'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up':   'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        float:       { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        'glow-pulse':{ '0%,100%': { opacity: '0.4' }, '50%': { opacity: '1' } },
        shimmer:     { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        fadeUp:      { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'neon-sm':  '0 0 10px #FF5DA840, 0 0 20px #FF5DA820',
        'neon-md':  '0 0 20px #FF5DA860, 0 0 40px #FF5DA830',
        'neon-lg':  '0 0 40px #FF5DA880, 0 0 80px #FF5DA840',
        'purple-sm':'0 0 10px #C47EC840',
        'glass':    '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
