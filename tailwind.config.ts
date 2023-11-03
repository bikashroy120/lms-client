import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:["class"],
  theme: {
    extend: {
      fontFamily:{
        Poppins:["var(--font-Poppins)"],
        Josefin:["var(--font-Josefin)"],
      },  
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9", 
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        "1000px":"1000px",
        "1100px":"1100px",
        "1200px":"1200px",
        "1300px":"1300px",
        "1500px":"1500px",
        "800px":"800px",
        "400px":"400px",
      },
    },
  },
  plugins: [],
}
export default config
