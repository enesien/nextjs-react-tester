import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      colors: {
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
        success: {
          DEFAULT: "#819e44",
          foreground: "#f1f7fd",
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
        // same as primary color
        'blue': {
          '50': '#f3f4fb',
          '100': '#e3e7f6',
          '200': '#ced6ef',
          '300': '#acbae4',
          '400': '#8497d6',
          '500': '#6777ca',
          '600': '#535dbd',
          '700': '#494dac',
          '800': '#40418d',
          '900': '#323466', // <--
          '950': '#252646',
        },
        // same as secondary color
        'seagull': {
          '50': '#f0faff',
          '100': '#e1f3fd',
          '200': '#bce7fb',
          '300': '#70d0f7', // <--
          '400': '#3ec1f2',
          '500': '#15a9e2',
          '600': '#0888c1',
          '700': '#086d9c',
          '800': '#0b5c81',
          '900': '#0f4c6b',
          '950': '#0a3147',
        },
        // success
        'olive-drab': {
          '50': '#f6f8ed',
          '100': '#eaf0d7',
          '200': '#d6e2b4',
          '300': '#bace88',
          '400': '#9fb962',
          '500': '#819e44', // <--
          '600': '#6e8938',
          '700': '#4d602b',
          '800': '#3f4e26',
          '900': '#374324',
          '950': '#1c240f',
        },

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config