/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          900: "#050518",
          800: "#090929",
          700: "#0D0D3D",
          600: "#111151",
          500: "#161666",
          400: "#1A1A7A",
          300: "#404090",
          200: "#6666A6",
          100: "#8C8CBC",
          50: "#B3B3D3",
          25: "#D1D1E4",
        },
        secondary: {
          900: "#331C01",
          800: "#552F02",
          700: "#804702",
          600: "#AA5F03",
          500: "#D47604",
          400: "#FF8E05",
          300: "#FFA12F",
          200: "#FFB458",
          100: "#FFC682",
          50: "#FFD9AC",
          25: "#FFE8CD",
          10: "rgb(255, 251, 245)",
        },
        "text-primary": {
          100: "#262633",
          50: "#585865",
          25: "#ACACB2",
        },
        "background-white": "#FBFBFB",
        "background-black": "#1B1B1B",
        "background-gray": "#F2F2F2",
        warning: {
          100: "#FFA503",
          50: "#FDB22D",
        },
        border: {
          100: "#CCCCD8",
          50: "#DCDCE0",
          25: "#ECECEE",
        },
        inactive: "#91888B",
        danger: "#FE0000",
        success: "#18C414",
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      
      color: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}