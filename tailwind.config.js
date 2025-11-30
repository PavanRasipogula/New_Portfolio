/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Dark Mode Colors (Neon Anime Cyberpunk)
                dark: {
                    bg: '#0a0a1f', // Deep Midnight Navy
                    surface: '#1a1a2e', // Deep Purple/Blue
                    primary: '#b000ff', // Neon Purple
                    secondary: '#00f2ff', // Cyan
                    accent: '#ff006e', // Hot Pink
                    text: '#ffffff',
                    muted: '#a0a0c0'
                },
                // Light Mode Colors (Pastel Anime Kawaii)
                light: {
                    bg: '#fff5f8', // Soft Pink White
                    surface: '#ffffff',
                    primary: '#ffb7b2', // Pastel Pink (Melon)
                    secondary: '#a9def9', // Pastel Blue (Uranian)
                    accent: '#e0aaff', // Pastel Purple
                    lavender: '#e4c1f9', // Lavender
                    mint: '#b8f2e6', // Mint
                    peach: '#ffc8dd', // Peach
                    text: '#4a4e69', // Independence (Dark Grey/Purple)
                    muted: '#9a8c98'
                }
            },
            boxShadow: {
                // Light Mode - Soft Floating Shadows
                'neu-light': '0 10px 40px -10px rgba(255, 183, 178, 0.3), 0 4px 20px -5px rgba(169, 222, 249, 0.2)',
                'neu-light-sm': '0 5px 15px -5px rgba(169, 222, 249, 0.4)',
                'neu-light-inset': 'inset 2px 2px 5px rgba(0,0,0,0.02)',
                'anime-light': '0 8px 32px rgba(255, 183, 178, 0.25)',

                // Dark Mode - Neon Glow Shadows
                'neu-dark': '0 0 20px rgba(176, 0, 255, 0.3), 0 0 40px rgba(0, 242, 255, 0.15)',
                'neu-dark-sm': '0 0 15px rgba(176, 0, 255, 0.3)',
                'neu-dark-inset': 'inset 2px 2px 5px rgba(0,0,0,0.2)',
                'neon-glow': '0 0 20px rgba(176, 0, 255, 0.5), 0 0 40px rgba(0, 242, 255, 0.3), 0 0 60px rgba(176, 0, 255, 0.2)',
                'neon-glow-sm': '0 0 10px rgba(176, 0, 255, 0.4), 0 0 20px rgba(0, 242, 255, 0.2)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-anime': 'linear-gradient(135deg, var(--tw-gradient-stops))',
            },
            borderRadius: {
                'anime': '1.5rem',
                'anime-lg': '2rem',
                'anime-xl': '2.5rem',
                'anime-2xl': '3rem',
            },
            backdropBlur: {
                'anime': '12px',
            },
            animation: {
                'blob': 'blob 7s infinite',
                'spin-slow': 'spin 20s linear infinite',
                'spin-reverse-slow': 'spin-reverse 15s linear infinite',
                'gradient-x': 'gradient-x 3s ease infinite',
                'sparkle': 'sparkle 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'magical-spin': 'magical-spin 4s ease-in-out infinite',
                'bounce-slow': 'bounce 3s ease-in-out infinite',
            },
            keyframes: {
                blob: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                },
                'spin-reverse': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(-360deg)' },
                },
                'gradient-x': {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                sparkle: {
                    '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
                    '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
                    '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
                },
                'magical-spin': {
                    '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
                    '50%': { transform: 'rotate(180deg) scale(1.1)' },
                },
            },
        },
    },
    plugins: [],
}
