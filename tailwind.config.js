module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 90%)",
        input: "hsl(0, 0%, 90%)",
        ring: "hsl(35, 85%, 45%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(210, 13%, 20%)",
        primary: {
          DEFAULT: "hsl(142, 45%, 38%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(34, 30%, 75%)",
          foreground: "hsl(142, 45%, 18%)",
        },
        tertiary: {
          DEFAULT: "hsl(28, 85%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(210, 13%, 20%)",
        },
        success: "hsl(142, 55%, 35%)",
        warning: "hsl(42, 90%, 52%)",
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 95%)",
          foreground: "hsl(0, 0%, 40%)",
        },
        accent: {
          DEFAULT: "hsl(28, 85%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 13%, 20%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(210, 13%, 20%)",
        },
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 95%)",
          200: "hsl(0, 0%, 90%)",
          300: "hsl(0, 0%, 80%)",
          400: "hsl(0, 0%, 65%)",
          500: "hsl(0, 0%, 50%)",
          600: "hsl(0, 0%, 40%)",
          700: "hsl(0, 0%, 30%)",
          800: "hsl(0, 0%, 20%)",
          900: "hsl(0, 0%, 10%)",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(142, 50%, 40%) 0%, hsl(142, 40%, 30%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(40, 88%, 60%) 0%, hsl(30, 85%, 50%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsl(142, 45%, 38%), hsl(28, 85%, 60%))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
